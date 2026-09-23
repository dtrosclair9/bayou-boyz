import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaBand from '@/components/CtaBand'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PriceBlock from '@/components/PriceBlock'
import ProcessSteps from '@/components/ProcessSteps'
import Reveal from '@/components/Reveal'
import { cityPages, getCityPage } from '@/lib/cities'
import { getService, services } from '@/lib/services'
import { serviceSchema } from '@/lib/schema'
import { dieselPrice, oilChangeTiers } from '@/lib/pricing'
import {
  BASE_URL,
  generacDisclaimer,
  generatorScopeNote,
  ogImage,
  site,
} from '@/lib/site'

/**
 * One dynamic segment serves both the service hubs and the city+service pages.
 *
 * The Strykora city URL pattern is `[service-slug]-[city-slug]-la`, which is
 * NOT a valid Next.js route as a partial dynamic segment. Matching the whole
 * slug here is what keeps those pages from 404ing.
 */
export function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...cityPages.map((c) => ({ slug: c.slug })),
  ]
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const city = getCityPage(slug)
  const service = getService(slug)
  const page = city ?? service
  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      url: `${BASE_URL}/services/${slug}`,
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const city = getCityPage(slug)

  if (city) return <CityServicePage slug={slug} />

  const service = getService(slug)
  if (!service) notFound()

  const offers =
    service.priceMode === 'oil'
      ? oilChangeTiers.map((t) => ({ price: t.price, description: `${t.label} full synthetic oil change` }))
      : service.priceMode === 'diesel'
        ? [{ price: dieselPrice, description: 'Diesel pickup oil change, 10 quarts included' }]
        : undefined

  const relatedCities = cityPages.filter((c) => c.serviceSlug === service.slug)

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.h1,
          description: service.description,
          url: `${BASE_URL}/services/${service.slug}`,
          serviceType: service.schemaServiceType,
          offers,
        })}
      />

      <PageHero
        h1={service.h1}
        kicker={service.kicker}
        image={service.heroImage}
        imageAlt={service.heroAlt}
        crumbs={[
          { href: '/services', label: 'Services' },
          { href: `/services/${service.slug}`, label: service.navLabel },
        ]}
      />

      {/* Intro + price */}
      <section className="section bg-cream">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div>
            {service.intro.map((p) => (
              <p key={p.slice(0, 40)} className="prose-body mb-4 last:mb-0">
                {p}
              </p>
            ))}

            {service.showGeneracNotes && (
              <div className="mt-8 border-l-4 border-brass bg-cream-dim p-5">
                <h2 className="font-sans text-base font-bold normal-case not-italic tracking-normal text-charcoal">
                  What we do and do not touch
                </h2>
                <p className="mt-2 leading-relaxed text-charcoal/85">{generatorScopeNote}</p>
              </div>
            )}
          </div>
          <Reveal>
            <PriceBlock mode={service.priceMode} />
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-cream-dim">
        <div className="container-wide">
          <h2 className="text-3xl text-charcoal sm:text-4xl">Why people call us for this</h2>
          <div className="rule-brass mt-4" aria-hidden="true" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.whyUs.map((w, i) => (
              <Reveal key={w.h3} delay={i * 0.06}>
                <div className="h-full border-t-4 border-olive bg-cream p-6">
                  <h3 className="font-sans text-xl font-bold normal-case not-italic tracking-normal text-charcoal">
                    {w.h3}
                  </h3>
                  <p className="mt-3 leading-relaxed text-charcoal/85">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="section bg-charcoal">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl text-cream sm:text-4xl">{service.includedHeading}</h2>
            <div className="mt-4 h-1 w-16 bg-brass-light" aria-hidden="true" />
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              Everything below happens on every visit. Nothing on this list is an upgrade or an
              add-on waiting at the end.
            </p>
            <Link href="/contact" className="btn-cream mt-8">
              Book this service
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {service.included.map((i) => (
              <li key={i} className="flex gap-3 border-l-4 border-brass-light bg-charcoal-soft p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-brass-light" aria-hidden="true" />
                <span className="text-cream/90">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps name={`How ${service.h1.toLowerCase()} works`} steps={service.process} />

      {/* Real job photo, where one exists at a usable resolution */}
      {service.photo && (
        <section className="bg-cream pb-16 md:pb-24">
          <div className="container-wide">
            <figure className="mx-auto max-w-2xl">
              <div className="relative aspect-square w-full overflow-hidden border-8 border-charcoal bg-olive">
                <Image
                  src={service.photo.src}
                  alt={service.photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted">
                An actual Bayou Boyz job, not a stock photo.
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* Related city pages */}
      {relatedCities.length > 0 && (
        <section className="section bg-cream-dim">
          <div className="container-wide">
            <h2 className="text-3xl text-charcoal sm:text-4xl">Where we do this</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="group border-2 border-charcoal/15 bg-cream p-5 transition-colors hover:border-olive"
                >
                  <h3 className="font-sans text-base font-bold normal-case not-italic tracking-normal text-charcoal group-hover:text-olive">
                    {c.h1}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{c.parish}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSection faqs={service.faqs} />

      {service.showGeneracNotes && (
        <section className="bg-cream py-8">
          <div className="container-wide">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">{generacDisclaimer}</p>
          </div>
        </section>
      )}

      <CtaBand
        heading="Get it scheduled"
        body={`Call or text either owner directly. Tell us what you have and where it sits, and we will confirm the price before anybody drives out.`}
      />
    </>
  )
}

/* ------------------------------------------------------------------ city page */

function CityServicePage({ slug }: { slug: string }) {
  const city = getCityPage(slug)
  if (!city) notFound()
  const service = getService(city.serviceSlug)
  if (!service) notFound()

  const offers =
    service.priceMode === 'oil'
      ? oilChangeTiers.map((t) => ({ price: t.price, description: `${t.label} full synthetic oil change` }))
      : service.priceMode === 'diesel'
        ? [{ price: dieselPrice, description: 'Diesel pickup oil change, 10 quarts included' }]
        : undefined

  const siblings = cityPages.filter((c) => c.slug !== city.slug && c.city === city.city)

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: city.h1,
          description: city.description,
          url: `${BASE_URL}/services/${city.slug}`,
          serviceType: service.schemaServiceType,
          areaName: city.city,
          offers,
        })}
      />

      <PageHero
        h1={city.h1}
        kicker={city.parish}
        image={service.heroImage}
        imageAlt={service.heroAlt}
        crumbs={[
          { href: '/services', label: 'Services' },
          { href: `/services/${service.slug}`, label: service.navLabel },
          { href: `/services/${city.slug}`, label: city.city },
        ]}
      />

      {/* Local context + price */}
      <section className="section bg-cream">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div>
            {city.localContext.map((p) => (
              <p key={p.slice(0, 40)} className="prose-body mb-4 last:mb-0">
                {p}
              </p>
            ))}
            {service.showGeneracNotes && (
              <div className="mt-8 border-l-4 border-brass bg-cream-dim p-5">
                <h2 className="font-sans text-base font-bold normal-case not-italic tracking-normal text-charcoal">
                  What we do and do not touch
                </h2>
                <p className="mt-2 leading-relaxed text-charcoal/85">{generatorScopeNote}</p>
              </div>
            )}
          </div>
          <Reveal>
            <PriceBlock mode={service.priceMode} />
          </Reveal>
        </div>
      </section>

      {/* Why here */}
      <section className="section bg-cream-dim">
        <div className="container-wide">
          <h2 className="text-3xl text-charcoal sm:text-4xl">
            What this looks like in {city.city}
          </h2>
          <div className="rule-brass mt-4" aria-hidden="true" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {city.whyHere.map((w, i) => (
              <Reveal key={w.h3} delay={i * 0.06}>
                <div className="h-full border-t-4 border-olive bg-cream p-6">
                  <h3 className="font-sans text-lg font-bold normal-case not-italic tracking-normal text-charcoal">
                    {w.h3}
                  </h3>
                  <p className="mt-3 leading-relaxed text-charcoal/85">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included, shared with the parent service */}
      <section className="section bg-charcoal">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl text-cream sm:text-4xl">{service.includedHeading}</h2>
            <div className="mt-4 h-1 w-16 bg-brass-light" aria-hidden="true" />
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              The same service everywhere we go, at the same posted price. {city.city} gets no
              travel charge and no different rate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneRaw}`} className="btn-cream">
                Call {site.phoneDisplay}
              </a>
              <Link
                href={`/services/${service.slug}`}
                className="btn border-2 border-cream text-cream hover:bg-cream hover:text-charcoal"
              >
                Full service details
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {service.included.map((i) => (
              <li key={i} className="flex gap-3 border-l-4 border-brass-light bg-charcoal-soft p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-brass-light" aria-hidden="true" />
                <span className="text-cream/90">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nearby */}
      <section className="section bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl text-charcoal sm:text-4xl">Around {city.city}</h2>
          <div className="rule-brass mt-4" aria-hidden="true" />
          <p className="mt-5 prose-body max-w-3xl">
            We also cover {city.nearby.slice(0, -1).join(', ')} and {city.nearby.slice(-1)} at the
            same rates, along with the rest of {city.parish}.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {city.nearby.map((n) => (
              <li
                key={n}
                className="border-2 border-charcoal/15 bg-cream-dim px-4 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal"
              >
                {n}
              </li>
            ))}
          </ul>

          {siblings.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group border-2 border-charcoal/15 p-5 transition-colors hover:border-olive"
                >
                  <h3 className="font-sans text-base font-bold normal-case not-italic tracking-normal text-charcoal group-hover:text-olive">
                    {s.h1}
                  </h3>
                  <p className="mt-1 text-sm text-muted">Also in {s.city}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FaqSection faqs={city.faqs} heading={`${city.city} questions`} tone="dark" />

      {service.showGeneracNotes && (
        <section className="bg-cream py-8">
          <div className="container-wide">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">{generacDisclaimer}</p>
          </div>
        </section>
      )}

      <CtaBand
        heading={`Book it in ${city.city}`}
        body={`Give us the vehicle or the equipment and a cross street, and we will lock in a window. Same posted price as everywhere else we run.`}
      />
    </>
  )
}
