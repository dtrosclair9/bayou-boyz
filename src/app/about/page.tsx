import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import { peopleSchema } from '@/lib/schema'
import { BASE_URL, contacts, ogImage, site } from '@/lib/site'

const title = 'About Bayou Boyz Mobile Oil Changes'
const description =
  'Bayou Boyz is Joel Cortez and Chase Stelly, a mobile vehicle maintenance service based in Thibodaux serving Lafourche, Terrebonne and Assumption Parish.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    url: `${BASE_URL}/about`,
    title,
    description,
    images: [ogImage],
  },
}

const faqs = [
  {
    q: 'Who is Bayou Boyz?',
    a: 'Joel Cortez and Chase Stelly. They own the business, they run the trucks and they answer the phones. Bayou Boyz Mobile Oil Changes L.L.C. is based in Thibodaux and works across Lafourche, Terrebonne and Assumption Parish.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes, Bayou Boyz is insured. If you need specifics for a workplace or a property manager before we come on site, call or text and we will get you what you need.',
  },
  {
    q: 'What makes a mobile service different from a shop?',
    a: 'The work is the same work. What changes is where it happens and what it costs you in time. Nothing gets dropped off, nothing waits in a queue and nobody rearranges a day around a bay opening up.',
  },
  {
    q: 'What will you turn down?',
    a: 'Anything that is repair rather than maintenance. Breakdowns, diagnostics, transmissions, electrical faults, transfer switches, gas lines, generator installation, Class 8 trucks and heavy equipment. We will tell you what we think is going on and point you toward somebody set up for it.',
  },
]

export default function AboutPage() {
  return (
    <>
      {peopleSchema.map((p) => (
        <JsonLd key={p['@id']} data={p} />
      ))}

      <PageHero
        h1={title}
        kicker="Thibodaux, Louisiana"
        intro="Two owners, two phone numbers and a service that comes to your driveway."
        crumbs={[{ href: '/about', label: 'About' }]}
      />

      <section className="section bg-cream">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div>
            <h2 className="text-3xl text-charcoal sm:text-4xl">Why the business exists</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />
            <p className="mt-5 prose-body">
              Around here, the hours a shop is open are the hours most people are working. That is
              the whole problem. An oil change is not difficult and it does not take long, but
              getting one means taking time off, driving somewhere, waiting, and driving back.
            </p>
            <p className="mt-4 prose-body">
              So it gets put off. Then it gets put off again, and a maintenance item that costs a
              hundred dollars turns into something that costs a great deal more.
            </p>
            <p className="mt-4 prose-body">
              Bayou Boyz started because the fix is obvious once somebody is willing to do it. Bring
              the service to where the vehicle already sits. The truck is in the driveway for
              fourteen hours a day doing nothing. That is when the work should happen.
            </p>
            <p className="mt-4 prose-body">
              It grew from there. People who called about a truck started asking whether we would
              look at the standby generator on the side of the house, or the zero-turn in the shed.
              Same engines, same oil, same filters. Now it is one visit for the whole property.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-charcoal/15 bg-cream-dim p-6">
              <h2 className="text-2xl text-charcoal">The business</h2>
              <dl className="mt-4 space-y-3 text-charcoal/85">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted">Legal name</dt>
                  <dd>{site.legalName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted">Based in</dt>
                  <dd>
                    {site.city}, {site.stateFull}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted">Covers</dt>
                  <dd>Lafourche, Terrebonne and Assumption Parish</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted">Email</dt>
                  <dd className="break-all">{site.email}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted">Status</dt>
                  <dd>Insured</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal">
        <div className="container-wide">
          <h2 className="text-3xl text-cream sm:text-4xl">The owners</h2>
          <div className="mt-4 h-1 w-16 bg-brass-light" aria-hidden="true" />
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-cream/85">
            Both numbers reach an owner. Call whichever one you like, or whichever one you reached
            last time.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {contacts.map((c) => (
              <div
                key={c.phoneRaw}
                id={c.name.toLowerCase().replace(' ', '-')}
                className="border-t-4 border-brass-light bg-charcoal-soft p-7"
              >
                <h3 className="text-3xl text-cream">{c.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brass-light">
                  Owner
                </p>
                <a
                  href={`tel:${c.phoneRaw}`}
                  className="mt-4 inline-block font-display text-3xl italic text-cream transition-colors hover:text-brass-light"
                >
                  {c.phoneDisplay}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-dim">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl text-charcoal sm:text-4xl">How we work</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />
            <p className="mt-5 prose-body">
              Prices are published because a straight number should not be hard to get. Full
              synthetic is the only oil we run, so nothing gets upgraded at the driveway. Every job
              ends with a service record emailed to you, because maintenance you cannot prove is
              worth less than maintenance you can.
            </p>
            <p className="mt-4 prose-body">
              We are also clear about the edges of what we do. Bayou Boyz is a maintenance service.
              When something needs a repair shop or a licensed electrician, saying so costs us a job
              and saves you a bad afternoon.
            </p>
            <Link href="/pricing" className="btn-primary mt-8">
              See the prices
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              'Published pricing on everything we can honestly post',
              'Full synthetic oil on every vehicle',
              'Service record emailed after every job',
              'Old oil hauled off with us',
              'Evenings and weekends worked as normal hours',
              'Straight answers about what we will not take on',
            ].map((i) => (
              <li key={i} className="flex gap-3 border-l-4 border-olive bg-cream p-4">
                <span className="mt-2 h-2 w-2 shrink-0 bg-brass" aria-hidden="true" />
                <span className="text-charcoal/85">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="About us" />

      <CtaBand
        heading="Talk to an owner"
        body="No call center and no booking queue. Both numbers below ring one of the two people who will be doing the work."
      />
    </>
  )
}
