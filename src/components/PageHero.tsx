import Image from 'next/image'
import Link from 'next/link'
import JsonLd from './JsonLd'
import { BASE_URL } from '@/lib/site'

type Crumb = { href: string; label: string }

type Props = {
  h1: string
  kicker?: string
  intro?: string
  image?: string
  imageAlt?: string
  imagePosition?: string
  crumbs: Crumb[]
}

/**
 * Shared hero. Emits BreadcrumbList JSON-LD for every nested page so no page
 * ever hand-codes it.
 *
 * Treatment is a bottom-up scrim over the photo, never the left-dark gradient
 * wash. When a page has no photo yet it falls back to a solid olive field with
 * a brass rule rather than shipping as text on a flat dark rectangle.
 */
export default function PageHero({
  h1,
  kicker,
  intro,
  image,
  imageAlt,
  imagePosition = 'object-center',
  crumbs,
}: Props) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.label,
        item: `${BASE_URL}${c.href}`,
      })),
    ],
  }

  return (
    <section className={image ? 'relative bg-olive-deep' : 'relative bg-olive'}>
      <JsonLd data={breadcrumbSchema} />

      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className={`object-cover ${imagePosition}`}
          />
          {/* Hero copy is TOP aligned, so a bottom-up scrim leaves the H1 and
              breadcrumbs sitting on bare photo. A flat base carries the
              contrast and the gradient only adds depth underneath it. */}
          <div className="absolute inset-0 bg-olive-deep/80" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-olive-deep/70 via-transparent to-olive-deep/60"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="container-wide relative">
        <div className="max-w-3xl pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20 lg:pt-16">
          <nav aria-label="Breadcrumb" className="mb-5">
            {/* Full cream, not cream/70: at 12px these are small text and need
                4.5:1 on the olive field. The current page is marked with brass
                instead of with a lower opacity. */}
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cream">
              <li>
                <Link href="/" className="transition-colors hover:text-cream">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-brass-pale">
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href} className="transition-colors hover:text-cream">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {kicker && (
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brass-pale">
              {kicker}
            </p>
          )}

          <h1 className="text-4xl leading-[0.95] text-cream sm:text-5xl lg:text-6xl">{h1}</h1>

          <div className="mt-5 h-1 w-20 bg-brass-pale" aria-hidden="true" />

          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/90">{intro}</p>}
        </div>
      </div>
    </section>
  )
}
