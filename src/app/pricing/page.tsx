import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PriceBlock from '@/components/PriceBlock'
import Reveal from '@/components/Reveal'
import { itemListSchema } from '@/lib/schema'
import { quoteOnly } from '@/lib/pricing'
import { BASE_URL, ogImage } from '@/lib/site'

// H1 stays short and human; the title tag carries the city terms.
const h1 = 'Oil Change Prices'
const title = 'Mobile Oil Change Prices in Thibodaux & Houma'
const description =
  'Straight pricing, no upsells. $100 four-cylinder, $115 six, $130 eight, $200 diesel. Tire rotation $40. Filters $10. All full synthetic, all at your location.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/pricing' },
  openGraph: {
    url: `${BASE_URL}/pricing`,
    title,
    description,
    images: [ogImage],
  },
}

const faqs = [
  {
    q: 'Is the posted price the price I actually pay?',
    a: 'Yes, plus sales tax. The only way the number moves is if your engine holds more oil than the quarts included, and we tell you that before we pour it. There is no travel charge, no shop fee and no disposal fee.',
  },
  {
    q: 'Why is there only one oil change price instead of a cheap one and an expensive one?',
    a: 'Because we only run full synthetic. Shops that advertise a low number are usually quoting conventional oil, and the synthetic price shows up once your vehicle is already on the lift. We would rather post the real number.',
  },
  {
    q: 'What does it cost if my engine needs extra quarts?',
    a: 'Each additional quart beyond what is included is $10. The quantities listed cover most engines in each cylinder class, and larger displacement engines are the usual reason for an extra quart.',
  },
  {
    q: 'Why are add-on prices labor only?',
    a: 'Filter and blade prices vary a lot between vehicles. Building an average into the labor price would overcharge some people and undercharge others, so we post the labor and bill the part at what it costs us.',
  },
  {
    q: 'Why are generators and mowers not priced here?',
    a: 'Because the parts and the time change with the machine, and a single posted number would be wrong for most of them. Send us the brand and model and we will give you a firm quote before we come out, which is the same commitment as a posted price.',
  },
]

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          [
            { name: 'Standard oil change, 4-cylinder, $100', url: `${BASE_URL}/services/mobile-oil-change` },
            { name: 'Standard oil change, 6-cylinder, $115', url: `${BASE_URL}/services/mobile-oil-change` },
            { name: 'Standard oil change, 8-cylinder, $130', url: `${BASE_URL}/services/mobile-oil-change` },
            { name: 'Diesel oil change, $200', url: `${BASE_URL}/services/mobile-diesel-oil-change` },
            { name: 'Tire rotation and pressure check, $40', url: `${BASE_URL}/services/mobile-vehicle-maintenance` },
          ],
          'Bayou Boyz pricing'
        )}
      />

      <PageHero
        h1={h1}
        kicker="Posted, not quoted on arrival"
        intro="Every number below is what you pay, plus sales tax. The price is the same in every town we serve and it does not change when we pull into the driveway."
        crumbs={[{ href: '/pricing', label: 'Pricing' }]}
      />

      <section className="section bg-cream">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div>
                <h2 className="mb-4 text-2xl text-charcoal">Cars, trucks and SUVs</h2>
                <PriceBlock mode="oil" />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div>
                <h2 className="mb-4 text-2xl text-charcoal">Diesel pickups</h2>
                <PriceBlock mode="diesel" />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h2 className="mb-4 text-2xl text-charcoal">Add-ons</h2>
                <PriceBlock mode="addons" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl text-cream sm:text-4xl">Quoted per job</h2>
            <div className="mt-4 h-1 w-16 bg-brass-light" aria-hidden="true" />
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              Three of our services are not on a posted menu, and we would rather say why than
              leave a blank. Generators, mowers and fleet accounts all vary enough in parts and time
              that one number would be wrong for most of the people reading it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/85">
              What you get instead is a firm quote before anybody drives out. Same commitment,
              arrived at one machine at a time.
            </p>
          </div>
          <ul className="space-y-3">
            {quoteOnly.map((q) => (
              <li key={q} className="flex gap-3 border-l-4 border-brass-light bg-charcoal-soft p-5">
                <span className="mt-2 h-2 w-2 shrink-0 bg-brass-light" aria-hidden="true" />
                <span className="text-cream/90">{q}</span>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn-cream mt-2 w-full">
                Ask for a quote
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="About the pricing" />

      <CtaBand
        heading="Know the number before we come"
        body="Tell us the vehicle or the machine and we will confirm exactly what it runs. Nothing gets added once we are in the driveway."
      />
    </>
  )
}
