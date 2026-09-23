'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { nav, site } from '@/lib/site'

/**
 * Header is cream, not dark. The approved wordmark is charcoal on a
 * transparent field, so it requires a light ground to stay legible.
 *
 * Two layout rules learned the hard way:
 *  - The full desktop nav is gated at `lg` (1024px), never `md` (768px).
 *    iPad portrait is ~810px and crams badly if `md` opens the desktop layout.
 *  - Nothing in this component uses backdrop-filter / backdrop-blur. Those
 *    create a containing block for fixed children, which collapses the mobile
 *    menu overlay to zero height and makes it invisible while still trapping
 *    taps.
 */
export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile panel on navigation.
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const services = nav.find((n) => n.children)?.children ?? []

  return (
    // `sticky` already establishes the containing block the mobile panel's
    // `absolute` positioning needs, so no `relative` is added here.
    <header className="sticky top-0 z-50 border-b-2 border-charcoal/10 bg-cream">
      <div className="container-wide flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
          {/* The approved lockup is square: gator stacked over the wordmark. */}
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={1231}
            height={1234}
            priority
            className="h-14 w-auto sm:h-16 lg:h-20"
          />
        </Link>

        {/* Desktop nav, 1024px and up */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:text-olive"
                  aria-expanded={servicesOpen}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" className="mt-0.5">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-64 border-2 border-charcoal/10 bg-cream py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-olive hover:text-cream"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:text-olive"
              >
                {item.label}
              </Link>
            )
          )}
          <a href={`tel:${site.phoneRaw}`} className="btn-primary ml-2 text-sm">
            {site.phoneDisplay}
          </a>
        </nav>

        {/* Tablet and mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${site.phoneRaw}`}
            className="btn-primary px-4 py-2 text-xs sm:text-sm"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border-2 border-charcoal text-charcoal"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet panel. Solid cream, no blur anywhere in its ancestry.
          Positioned off `top-full` rather than a hardcoded offset, so it stays
          docked to the header at every logo size and breakpoint. */}
      {open && (
        <div className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-5rem)] overflow-y-auto border-b-2 border-charcoal/10 bg-cream lg:hidden">
          <nav className="container-wide py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block border-b border-charcoal/10 py-3 font-display text-2xl uppercase italic tracking-tight text-charcoal"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 space-y-1 py-2 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-base font-medium text-muted"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3">
              <a href={`tel:${site.phoneRaw}`} className="btn-primary w-full">
                Call {site.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-outline w-full">
                Book a service
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

/** Services list is re-exported for the footer so both read one source. */
export { nav as headerNav }
