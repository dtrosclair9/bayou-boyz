import Link from 'next/link'
import { contacts, nav, parishes, serviceAreas, site } from '@/lib/site'

/**
 * Charcoal footer. The wordmark artwork is charcoal on transparent so it
 * cannot sit on this ground. The brand is set in display type here instead.
 *
 * Column count steps 4 -> 2 -> 1. It never passes through 3, which leaves an
 * orphan column at tablet widths.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  const services = nav.find((n) => n.children)?.children ?? []

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-wide py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl uppercase italic leading-none tracking-tight text-cream">
              Bayou Boyz
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brass-light">
              Mobile Oil Changes
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              Mobile oil changes, diesel service, standby generator maintenance and small engine
              work across Lafourche, Terrebonne and Assumption Parish. We come to you.
            </p>
            <p className="mt-4 text-sm text-cream/60">Insured.</p>
          </div>

          <div>
            <h2 className="font-sans text-sm font-bold uppercase not-italic tracking-widest text-brass-light">
              Services
            </h2>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-bold uppercase not-italic tracking-widest text-brass-light">
              Where we go
            </h2>
            <ul className="mt-4 space-y-2">
              {serviceAreas.map((a) => (
                <li key={a} className="text-sm text-cream/80">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-cream/60">{parishes.join(' · ')}</p>
          </div>

          <div>
            <h2 className="font-sans text-sm font-bold uppercase not-italic tracking-widest text-brass-light">
              Call or text
            </h2>
            <ul className="mt-4 space-y-3">
              {contacts.map((c) => (
                <li key={c.phoneRaw}>
                  <a href={`tel:${c.phoneRaw}`} className="group block">
                    <span className="block text-sm text-cream/70">{c.name}</span>
                    <span className="font-display text-xl italic text-cream transition-colors group-hover:text-brass-light">
                      {c.phoneDisplay}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block break-all text-sm text-cream/80 transition-colors hover:text-cream"
            >
              {site.email}
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-block text-sm text-cream/80 transition-colors hover:text-cream"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-wide flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/60">
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream/60">
            <Link href="/privacy" className="transition-colors hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="transition-colors hover:text-cream">
              Accessibility
            </Link>
            <a
              href="https://strykora.com"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-cream"
            >
              Website by Strykora
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
