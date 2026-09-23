import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import { cityPages } from '@/lib/cities'
import { itemListSchema } from '@/lib/schema'
import { BASE_URL, ogImage, parishes, serviceAreas } from '@/lib/site'

const h1 = 'Service Areas'
const title = 'Service Areas in Lafourche & Terrebonne Parish'
const description =
  'Bayou Boyz serve Thibodaux, Houma, Chackbay, Raceland, Labadieville, Schriever, Gray, Bayou Cane, Lockport and Napoleonville across three parishes, with no travel charge.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/service-areas' },
  openGraph: {
    url: `${BASE_URL}/service-areas`,
    title,
    description,
    images: [ogImage],
  },
}

const parishBlocks = [
  {
    name: 'Lafourche Parish',
    towns: ['Thibodaux', 'Chackbay', 'Raceland', 'Lockport', 'Mathews', 'Kraemer'],
    body: 'Where the business is based. Thibodaux is home, and the bayou communities north and south of it are the shortest runs we make. Chackbay and Kraemer in particular are the kind of rural addresses where driving into town for an oil change costs most of a morning.',
  },
  {
    name: 'Terrebonne Parish',
    towns: ['Houma', 'Bayou Cane', 'Gray', 'Bourg', 'Schriever'],
    body: 'The biggest market we cover and our busiest area for diesel work, because so much of the Gulf service industry lives here. Greater Houma reaches well past the city limits, so Bayou Cane and Gray are treated exactly the same as Houma itself.',
  },
  {
    name: 'Assumption Parish',
    towns: ['Labadieville', 'Napoleonville', 'Paincourtville'],
    body: 'Cane country along the Highway 1 corridor. Labadieville was one of the three communities named when Bayou Boyz opened, and it anchors the coverage north of Thibodaux.',
  },
]

const faqs = [
  {
    q: 'Do you charge more to come to the far end of your service area?',
    a: 'No. Every town listed on this page pays the same posted price. A four-cylinder oil change is $100 in Houma and $100 in Chackbay, with no mileage or trip fee added either way.',
  },
  {
    q: 'My town is not listed. Will you still come?',
    a: 'Possibly. The list covers where we work most, not a hard boundary. Call or text with your address and we will give you a straight yes or no rather than book something we cannot reach.',
  },
  {
    q: 'How far out do you book?',
    a: 'It depends on the week and how far the address is. Thibodaux and the surrounding Lafourche communities are usually the quickest for us to fit in because that is where we are based. Call or text and we will tell you honestly what is open.',
  },
  {
    q: 'Do you cross into other parishes for fleet work?',
    a: 'For a fleet or a multi-vehicle job it is worth asking, because the economics change when several vehicles are in one place. Tell us where the yard is and how many trucks and we will tell you whether it works.',
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          cityPages.map((c) => ({ name: c.h1, url: `${BASE_URL}/services/${c.slug}` })),
          'Bayou Boyz service areas'
        )}
      />

      <PageHero
        h1={h1}
        kicker={parishes.join(' · ')}
        intro="We run out of Thibodaux and cover three parishes. The posted price is the same everywhere on this page."
        crumbs={[{ href: '/service-areas', label: 'Service Areas' }]}
      />

      <section className="section bg-cream">
        <div className="container-wide">
          <ul className="flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
              <li
                key={a}
                className="border-2 border-charcoal/15 bg-cream-dim px-4 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-10">
            {parishBlocks.map((p) => (
              <div key={p.name} className="border-t-4 border-olive pt-6">
                <h2 className="text-3xl text-charcoal">{p.name}</h2>
                <p className="mt-4 prose-body max-w-3xl">{p.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.towns.map((t) => (
                    <li key={t} className="bg-cream-dim px-3 py-1.5 text-sm text-charcoal">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-dim">
        <div className="container-wide">
          <h2 className="text-3xl text-charcoal sm:text-4xl">Pages by town</h2>
          <div className="rule-brass mt-4" aria-hidden="true" />
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

      <FaqSection faqs={faqs} heading="About where we go" />

      <CtaBand
        heading="Check your address"
        body="If you are not sure whether you are inside the area, call or text. It takes one message and we will give you a straight answer."
      />
    </>
  )
}
