import { bookingUrl, site } from '@/lib/site'

/**
 * Booking bar for phones. On desktop the booking panel is sticky in its own
 * column, so this only shows below `lg`.
 *
 * `sticky bottom-0` rather than `fixed`: as the last element inside main it
 * pins to the bottom of the viewport while the page scrolls, then releases at
 * the end of main so it never sits on top of the footer.
 *
 * No backdrop-blur anywhere: that property creates a containing block and has
 * broken overlays on past builds. Solid charcoal instead.
 */
export default function StickyBookingBar() {
  return (
    <div className="sticky bottom-0 z-40 border-t-2 border-brass-light bg-charcoal px-4 py-3 lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={`tel:${site.phoneRaw}`}
          className="btn flex-1 border-2 border-cream px-3 py-2.5 text-sm text-cream"
        >
          Call
        </a>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener"
          className="btn-primary flex-[2] px-3 py-2.5 text-sm"
        >
          Book online
        </a>
      </div>
    </div>
  )
}
