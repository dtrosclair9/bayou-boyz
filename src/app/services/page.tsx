import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { cityPages } from '@/lib/cities'
import { itemListSchema } from '@/lib/schema'
import { services } from '@/lib/services'
import { BASE_URL, ogImage } from '@/lib/site'

const title = 'Mobile Oil Change & Maintenance Services'
const description =
  'Mobile oil changes, diesel service, standby generator maintenance, small engine work, fleet accounts and vehicle maintenance across Lafourche and Terrebonne Parish.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    url: `${BASE_URL}/services`,
    title,
    description,
    images: [ogImage],
  },
}

const faqs = [
  {
    q: 'Which service do I need?',
    a: 'If it is a car, truck or SUV on gas, that is the standard mobile oil change. If it is a heavy-duty diesel pickup, that is the diesel service. Standby generators and zero-turn mowers each have their own page. If you are not sure, call or text and describe what you have.',
  },
  {
    q: 'Can I combine services on one visit?',
    a: 'Yes, and most repeat customers do. One stop can cover the truck, the standby generator and the mower. Tell us everything you want looked at when you book so we load the right oil and filters for all of it.',
  },
  {
    q: 'Which services have published prices?',
    a: 'Oil changes, diesel oil changes and the add-on services are all published. Generator maintenance, small engine service and fleet accounts are quoted per job because the parts and time vary too much to post one honest number.',
  },
  {
    q: 'What do you not do?',
    a: 'We are a maintenance service, not a repair shop. We do not do diagnostics, breakdown repair, transmission work, electrical work, transfer switches, gas lines, generator installation, Class 8 trucks or heavy equipment. When a job needs one of those we say so instead of taking it.',
  },
]

export default function ServicesIndex() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          services.map((s) => ({ name: s.h1, url: `${BASE_URL}/services/${s.slug}` })),
          'Bayou Boyz services'
        )}
      />

      <PageHero
        h1={title}
        kicker="Everything we bring to you"
        intro="Six services, all performed where your vehicle or equipment already sits, across Lafourche, Terrebonne and Assumption Parish."
        crumbs={[{ href: '/services', label: 'Services' }]}
      />

      <section className="section bg-cream">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col border-2 border-charcoal/15 bg-cream-dim p-7 transition-colors hover:border-olive"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brass-deep">
                  {s.kicker}
                </p>
                <h2 className="mt-2 text-3xl text-charcoal">{s.navLabel}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-charcoal/85">{s.cardBlurb}</p>
                <p className="mt-5 font-display text-3xl italic text-olive">{s.priceLine}</p>
                <span className="mt-2 text-sm font-bold uppercase tracking-wide text-charcoal group-hover:text-olive">
                  Learn more
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-cream-dim">
        <div className="container-wide">
          <h2 className="text-3xl text-charcoal sm:text-4xl">Service by town</h2>
          <div className="rule-brass mt-4" aria-hidden="true" />
          <p className="mt-5 prose-body max-w-3xl">
            Pages for the towns we work in most. Every one is the same posted price with no travel
            charge.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityPages.map((c) => (
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

      <FaqSection faqs={faqs} heading="Picking a service" />

      <CtaBand
        heading="Not sure which one you need"
        body="Describe the vehicle or the machine and we will tell you what it takes and what it costs. If it is not something we handle, we will say that too."
      />
    </>
  )
}
