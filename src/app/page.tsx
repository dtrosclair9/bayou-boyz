import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import PriceBlock from '@/components/PriceBlock'
import ProcessSteps from '@/components/ProcessSteps'
import Reveal from '@/components/Reveal'
import WorkGallery from '@/components/WorkGallery'
import { cityPages } from '@/lib/cities'
import { services } from '@/lib/services'
import { localBusinessSchema, peopleSchema, websiteSchema } from '@/lib/schema'
import { BASE_URL, contacts, ogImage, parishes, serviceAreas, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mobile Oil Change in Thibodaux & Houma, LA',
  description:
    'Full synthetic mobile oil changes at your home or job site in Thibodaux, Houma, Raceland and Chackbay. Cars, trucks, SUVs and diesel. From $100.',
  alternates: { canonical: '/' },
  openGraph: {
    url: BASE_URL,
    title: 'Mobile Oil Change in Thibodaux & Houma, LA',
    description:
      'Full synthetic mobile oil changes at your home or job site across Lafourche and Terrebonne Parish. Cars, trucks, SUVs, diesel and standby generators.',
    images: [ogImage],
  },
}

const homeFaqs = [
  {
    q: 'What is a mobile oil change and how does it work?',
    a: 'It is an oil change that happens where your vehicle is already parked. We drive to your house, your apartment lot or your job site with the oil, the filter and everything else on the truck, drain the old oil, install a new filter and refill to your manufacturer spec. You do not go anywhere and there is nothing to drop off.',
  },
  {
    q: 'How much does a mobile oil change cost?',
    a: 'A full synthetic oil change is $100 for a four-cylinder, $115 for a six-cylinder and $130 for an eight-cylinder, with the filter and labor included. Diesel pickups are $200 flat with ten quarts included. Add-ons like filters, rotations and battery testing start at $10. Sales tax is added to the total.',
  },
  {
    q: 'What towns do you serve?',
    a: 'Thibodaux, Houma, Chackbay, Raceland, Labadieville, Schriever, Gray, Bayou Cane, Lockport and Napoleonville, across Lafourche, Terrebonne and Assumption Parish. If your address is near that list, call or text and ask. We do not add a travel charge inside our service area.',
  },
  {
    q: 'What do you service besides cars and trucks?',
    a: 'Standby home generators, zero-turn mowers and small engines. The same visit can cover the truck in the driveway, the generator on the side of the house and the mower in the shed, which is the main reason people call us a second time.',
  },
  {
    q: 'Do you charge a trip fee or travel charge?',
    a: 'No. The posted price is the price anywhere inside our service area. Thibodaux, Houma, Raceland, Chackbay and Labadieville all pay the same number.',
  },
  {
    q: 'Do you work evenings and weekends?',
    a: 'Yes. That is a large part of why the business exists. Shop hours and working hours are the same hours for most people here, so evening and weekend appointments are normal for us rather than an exception.',
  },
  {
    q: 'How do I book a service?',
    a: 'Call or text Joel at (985) 414-1733 or Chase at (985) 859-1628, or fill out the booking form on the contact page. Tell us the vehicle or equipment, the town and roughly when you want it done, and we will confirm the price before we come out.',
  },
  {
    q: 'Do you service standby generators?',
    a: 'Yes. We handle the engine service on air-cooled home standby generators: oil, oil filter, air filter, pre-cleaner, spark plugs and a battery check. We do not do electrical work, transfer switches, gas lines or installation, and we will tell you plainly when something needs a licensed electrician instead.',
  },
  {
    q: 'Can you service more than one vehicle at the same stop?',
    a: 'Yes, and it is usually the better way to do it. Tell us how many vehicles and what they are when you call so we bring enough oil and the right filters for all of them. If you have a yard full of work trucks, ask about fleet pricing.',
  },
  {
    q: 'Are you a repair shop?',
    a: 'No. Bayou Boyz are a mobile maintenance service. We handle oil, filters, fluids, rotations, batteries, generators and small engines. We do not do diagnostics, breakdowns or repair work, so for a vehicle that will not run you want a mobile mechanic or a repair shop.',
  },
]

const pillars = [
  {
    title: 'Your truck',
    body: 'Cars, trucks, SUVs and heavy-duty diesel pickups. Full synthetic every time, with the price set by cylinder count and posted before you call.',
    href: '/services/mobile-oil-change',
  },
  {
    title: 'Your generator',
    body: 'Engine service on air-cooled home standby units. Oil, filters, plugs and battery, with no maintenance contract and no requirement that we installed it.',
    href: '/services/generator-maintenance',
  },
  {
    title: 'Your mower',
    body: 'Zero-turns and small engines serviced in the yard, so nothing gets loaded on a trailer and hauled to a shop for a week.',
    href: '/services/small-engine-maintenance',
  },
]

export default function HomePage() {
  const featuredCities = cityPages.slice(0, 6)

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
      {peopleSchema.map((p) => (
        <JsonLd key={p['@id']} data={p} />
      ))}

      {/* 1. Hero */}
      <section className="border-b-2 border-charcoal/10 bg-cream">
        <div className="container-wide grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brass-deep">
              Thibodaux &middot; Houma &middot; Lafourche &amp; Terrebonne
            </p>
            <h1 className="mt-4 text-5xl leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl">
              Oil changes.
              <span className="block text-olive">At your place.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/85">
              Bayou Boyz bring the oil change to your driveway, your work lot or your job site.
              Cars, trucks, SUVs and diesel pickups, plus the standby generator and the zero-turn
              while we are there. You keep your afternoon.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                Call or text {site.phoneDisplay}
              </a>
              <Link href="/pricing" className="btn-outline">
                See every price
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t-2 border-charcoal/10 pt-6">
              {[
                { k: '4-cyl', v: '$100' },
                { k: '6-cyl', v: '$115' },
                { k: '8-cyl', v: '$130' },
              ].map((c) => (
                <div key={c.k}>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted">{c.k}</dt>
                  <dd className="font-display text-3xl italic text-olive">{c.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-muted">
              Full synthetic, new filter and labor included. Diesel pickups {''}
              <Link href="/services/mobile-diesel-oil-change" className="text-brass-deep underline">
                $200 flat
              </Link>
              .
            </p>
          </div>

          <Reveal>
            {/* Real job photo, shown square because that is the native aspect
                of the source. Do not crop it into a wide band. */}
            <figure className="relative">
              <div className="relative aspect-square w-full overflow-hidden border-8 border-charcoal bg-olive">
                <Image
                  src="/images/job-oil-change.jpg"
                  alt="An SUV up on ramps in a Louisiana driveway with the hood open and a drain pan, oil and paper towels set out for a Bayou Boyz mobile oil change"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                A driveway in Thibodaux. No shop, no waiting room.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 2. The combined-visit position */}
      <section className="section bg-charcoal">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-3xl text-cream sm:text-4xl">One visit covers the whole place</h2>
            <div className="mt-4 h-1 w-16 bg-brass-light" aria-hidden="true" />
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              Most houses around here have more than one engine sitting on the property, and they
              all want the same few things. We handle them on the same stop instead of sending you
              to three different places.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Link
                  href={p.href}
                  className="group block h-full border-t-4 border-brass-light bg-charcoal-soft p-6 transition-colors hover:bg-olive"
                >
                  <h3 className="text-2xl text-cream">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-cream/80">{p.body}</p>
                  <span className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-brass-light group-hover:text-cream">
                    Learn more
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-3xl text-charcoal sm:text-4xl">What we do</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />
            <p className="mt-5 prose-body">
              Six services, all of them performed where your vehicle or equipment already sits. Every
              one of them ends with a service record emailed to you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col border-2 border-charcoal/15 bg-cream-dim p-6 transition-colors hover:border-olive"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-brass-deep">
                    {s.kicker}
                  </p>
                  <h3 className="mt-2 text-2xl text-charcoal">{s.navLabel}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-charcoal/80">{s.cardBlurb}</p>
                  <p className="mt-4 font-display text-2xl italic text-olive">{s.priceLine}</p>
                  <span className="mt-2 text-sm font-bold uppercase tracking-wide text-charcoal group-hover:text-olive">
                    Learn more
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing */}
      <section className="section bg-cream-dim">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl text-charcoal sm:text-4xl">The price is posted</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />
            <p className="mt-5 prose-body">
              Getting a straight number for an oil change over the phone is harder than it should
              be. Ours is published, it is the same in every town we serve and it does not change
              when we pull into the driveway.
            </p>
            <p className="mt-4 prose-body">
              Full synthetic is the only oil we run, so there is no cheaper grade underneath the
              advertised price and no upgrade waiting at the end. If your engine needs more than the
              quarts included, we tell you before we pour them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pricing" className="btn-primary">
                Full price list
              </Link>
              <Link href="/services/mobile-diesel-oil-change" className="btn-outline">
                Diesel pricing
              </Link>
            </div>
          </div>
          <Reveal>
            <PriceBlock mode="oil" />
          </Reveal>
        </div>
      </section>

      {/* 5. Process */}
      <ProcessSteps
        name="How a Bayou Boyz mobile oil change works"
        heading="How it works"
        steps={[
          {
            title: 'Call or text',
            body: 'Reach Joel at (985) 414-1733 or Chase at (985) 859-1628. Tell us the vehicle, the town and when suits you.',
          },
          {
            title: 'We confirm the price',
            body: 'Cylinder count sets the number for an oil change. Generators and mowers get quoted per machine. Either way you know before we drive out.',
          },
          {
            title: 'We come to you',
            body: 'House, apartment lot, work parking lot or job site. Everything we need is on the truck, including the containment for the used oil.',
          },
          {
            title: 'You get the record',
            body: 'We clean up, take the old oil with us and email you a service record with the date and the mileage on it.',
          },
        ]}
      />

      {/* 6. Why mobile */}
      <section className="section bg-charcoal">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl text-cream sm:text-4xl">What it actually saves you</h2>
            <div className="mt-4 h-1 w-16 bg-brass-light" aria-hidden="true" />
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              An oil change takes well under an hour. The part that eats your day is everything
              around it. Driving there, waiting behind whoever got there first, driving back, and
              arranging your morning around a shop that keeps the same hours you work.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/85">
              When the work happens in your driveway, all of that disappears. Most of our customers
              are doing something else entirely while we are there, and a fair number are not home
              at all.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                h: 'No drive, no line',
                b: 'The vehicle never leaves the property. Nothing gets scheduled around a bay opening up.',
              },
              {
                h: 'You do not have to be there',
                b: 'Leave it accessible and go on with your day. The record lands in your email when we finish.',
              },
              {
                h: 'Evenings and weekends',
                b: 'We work outside normal shop hours, which is when most people are actually free.',
              },
              {
                h: 'Old oil leaves with us',
                b: 'Nothing gets poured out and nothing stays behind in your trash or your driveway.',
              },
            ].map((c) => (
              <div key={c.h} className="border-l-4 border-brass-light bg-charcoal-soft p-5">
                <h3 className="font-sans text-lg font-bold normal-case not-italic tracking-normal text-cream">
                  {c.h}
                </h3>
                <p className="mt-2 leading-relaxed text-cream/80">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Real work */}
      <WorkGallery />

      {/* 8. Service areas */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-3xl text-charcoal sm:text-4xl">Where we go</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />
            <p className="mt-5 prose-body">
              Bayou Boyz cover {parishes.join(', ')} and the towns in between. The posted price is
              the same everywhere on this list, with no travel charge added for distance.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
              <li
                key={a}
                className="border-2 border-charcoal/15 bg-cream-dim px-4 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="group border-2 border-charcoal/15 p-5 transition-colors hover:border-olive"
              >
                <h3 className="font-sans text-base font-bold normal-case not-italic tracking-normal text-charcoal group-hover:text-olive">
                  {c.h1}
                </h3>
                <p className="mt-1 text-sm text-muted">{c.parish}</p>
              </Link>
            ))}
          </div>

          <Link href="/service-areas" className="btn-outline mt-8">
            All service areas
          </Link>
        </div>
      </section>

      {/* 9. Owners */}
      <section className="section bg-cream-dim">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <figure>
              <div className="relative aspect-square w-full overflow-hidden border-8 border-charcoal bg-olive">
                <Image
                  src="/images/hero-generator.jpg"
                  alt="A Generac standby home generator opened for service with an oil extractor connected, on a concrete pad beside a brick house"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                Same visit, different engine. A standby generator getting its oil pulled.
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <h2 className="text-3xl text-charcoal sm:text-4xl">Two guys, two phone numbers</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />
            <p className="mt-5 prose-body">
              Bayou Boyz is Joel Cortez and Chase Stelly. When you call, one of them answers. There
              is no dispatcher, no call center and no account manager in between, which is also why
              you get a straight answer about what we can and cannot do.
            </p>
            <p className="mt-4 prose-body">
              We are a maintenance service and we are honest about where that stops. Oil, filters,
              fluids, rotations, batteries, generators and small engines are ours. Diagnostics,
              breakdowns and repair work are not, and we will point you somewhere better rather than
              take the job.
            </p>
            <p className="mt-4 prose-body">Insured, and based in Thibodaux.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contacts.map((c) => (
                <a
                  key={c.phoneRaw}
                  href={`tel:${c.phoneRaw}`}
                  className="border-2 border-charcoal/15 bg-cream p-4 transition-colors hover:border-olive"
                >
                  <span className="block text-sm font-semibold text-muted">{c.name}</span>
                  <span className="font-display text-2xl italic text-olive">{c.phoneDisplay}</span>
                </a>
              ))}
            </div>
            <Link href="/about" className="btn-outline mt-6">
              More about us
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <FaqSection
        faqs={homeFaqs}
        heading="Questions people ask"
        intro="If something is not answered here, call or text either number and ask. We would rather tell you up front than have you find out at the driveway."
      />

      {/* 11. CTA */}
      <CtaBand
        heading="Ready when you are"
        body="Tell us the vehicle, the equipment and the town. We will confirm the price and find a window that does not cost you a working day."
      />
    </>
  )
}
