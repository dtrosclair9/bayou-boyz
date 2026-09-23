#!/usr/bin/env python3
"""
Image + Tailwind-class audit for a running Strykora build.

Run against a LIVE server (next start / next dev), not the source, because the
whole point is to check what actually ships:

    python3 scripts/audit-images.py http://localhost:3000

Checks
  1. ARBITRARY TAILWIND CLASSES COMPILED. Every `foo-[...]` class written in src/
     is looked up in the built CSS. A class outside tailwind.config `content`
     globs compiles to NOTHING with no error — this silently killed every image
     focal point on the Melancon build until it was caught by hand.
  2. IMAGE FILES EXIST for every <img> the pages render.
  3. FRAMING. Any portrait-source photo cropped (object-cover) into a landscape
     container without an object-position is flagged: default centering lands on
     sky or clips the subject.
  4. WEIGHT/SIZE. Source images over 2000px on the long side, or over ~900KB.
  5. OG IMAGE is exactly 1200x630.

Exit code 1 if anything fails, so it can gate a deploy.
"""
import json
import os
import re
import sys
import urllib.parse
import urllib.request

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow required:  python3 -m pip install --user pillow")

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
ROOT = os.getcwd()
PUBLIC = os.path.join(ROOT, "public")

fails, warns = [], []


def get(path):
    return urllib.request.urlopen(BASE + path, timeout=30).read().decode("utf-8", "replace")


def page_list():
    """Every URL in sitemap.xml, falling back to the homepage."""
    try:
        xml = get("/sitemap.xml")
        urls = re.findall(r"<loc>([^<]+)</loc>", xml)
        paths = []
        for u in urls:
            p = urllib.parse.urlparse(u).path or "/"
            paths.append(p)
        return sorted(set(paths)) or ["/"]
    except Exception as e:
        warns.append(f"no sitemap ({e}); auditing homepage only")
        return ["/"]


# ---------------------------------------------------------------- 1. classes
def check_arbitrary_classes():
    used = set()
    for dirpath, _dirs, files in os.walk(os.path.join(ROOT, "src")):
        for f in files:
            if not f.endswith((".ts", ".tsx", ".js", ".jsx", ".mdx")):
                continue
            src = open(os.path.join(dirpath, f), encoding="utf-8", errors="replace").read()
            for m in re.finditer(r"(?<![\w-])([a-z]+(?:-[a-z]+)*)-\[([^\]\s\"'`]+)\]", src):
                used.add(m.group(0))
    if not used:
        return
    css = ""
    css_dir = os.path.join(ROOT, ".next", "static", "css")
    if not os.path.isdir(css_dir):
        warns.append(".next/static/css missing — run a production build first")
        return
    for f in os.listdir(css_dir):
        if f.endswith(".css"):
            css += open(os.path.join(css_dir, f), encoding="utf-8", errors="replace").read()
    # Tailwind escapes selectors: `[` -> `\[`, `,` -> `\2c ` (hex escape), `.` -> `\.`
    # Decode hex escapes first, then drop remaining backslashes, then plain-match.
    decoded = re.sub(r"\\([0-9a-fA-F]{1,6})\s?", lambda m: chr(int(m.group(1), 16)), css)
    decoded = decoded.replace("\\", "")
    for cls in sorted(used):
        if cls not in decoded:
            fails.append(
                f"CLASS NOT COMPILED: `{cls}` appears in src/ but not in the built CSS. "
                "Check tailwind.config content globs (src/lib is a common miss)."
            )


# ------------------------------------------------------- 2-4. rendered images
ASPECT_RE = re.compile(r"aspect-\[(\d+)/(\d+)\]")
POS_RE = re.compile(r"object-\\?\[[a-z]+_(\d+)%\\?\]")


def check_images(paths):
    seen = set()
    for path in paths:
        try:
            html = get(path)
        except Exception as e:
            fails.append(f"{path}: could not fetch ({e})")
            continue
        for m in re.finditer(r"<img[^>]+>", html):
            tag = m.group(0)
            sm = re.search(r'src="([^"]+)"', tag)
            if not sm:
                continue
            src = urllib.parse.unquote(
                re.sub(r"^/_next/image\?url=", "", sm.group(1)).split("&")[0]
            )
            if not src.startswith("/images/"):
                continue
            disk = os.path.join(PUBLIC, src.lstrip("/"))
            if not os.path.exists(disk):
                fails.append(f"{path}: missing file {src}")
                continue
            cls = (re.search(r'class="([^"]*)"', tag) or [None, ""])[1]
            if "object-cover" not in cls:
                continue
            try:
                im = Image.open(disk)
            except Exception:
                continue
            before = html[max(0, m.start() - 700):m.start()]
            asp = ASPECT_RE.findall(before)
            ratio = (int(asp[-1][0]) / int(asp[-1][1])) if asp else 2.4  # hero band
            has_pos = bool(POS_RE.search(cls))
            portrait = im.height > im.width
            key = (src, round(ratio, 2), has_pos)
            if key in seen:
                continue
            seen.add(key)
            if portrait and ratio > 1.2 and not has_pos:
                fails.append(
                    f"{path}: {os.path.basename(src)} is portrait ({im.width}x{im.height}) "
                    f"cropped to {ratio:.2f}:1 with no focal point — will center on sky/clip the subject."
                )
            if max(im.size) > 2000:
                warns.append(f"{os.path.basename(src)} is {im.width}x{im.height} (cap the long side at 2000px)")
            kb = os.path.getsize(disk) / 1024
            if kb > 900:
                warns.append(f"{os.path.basename(src)} is {kb:.0f}KB (re-encode at quality 82-88)")


# ------------------------------------------------------------------- 5. og
def check_og():
    og = os.path.join(PUBLIC, "images", "og-image.jpg")
    if not os.path.exists(og):
        fails.append("public/images/og-image.jpg missing")
        return
    w, h = Image.open(og).size
    if (w, h) != (1200, 630):
        fails.append(f"og-image.jpg is {w}x{h}, must be exactly 1200x630")


def main():
    paths = page_list()
    print(f"auditing {len(paths)} pages at {BASE}\n")
    check_arbitrary_classes()
    check_images(paths)
    check_og()

    for w in dict.fromkeys(warns):
        print(f"  WARN  {w}")
    for f in dict.fromkeys(fails):
        print(f"  FAIL  {f}")
    print()
    if fails:
        print(f"{len(set(fails))} failure(s)")
        sys.exit(1)
    print("image audit passed" + (f" ({len(set(warns))} warnings)" if warns else ""))


if __name__ == "__main__":
    main()
