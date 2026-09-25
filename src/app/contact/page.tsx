import type { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import FaqSection from '@/components/FaqSection'
import PageHero from '@/components/PageHero'
import StickyBookingBar from '@/components/StickyBookingBar'
import { BASE_URL, contacts, ogImage, parishes, serviceAreas, site } from '@/lib/site'

const title = 'Book a Mobile Oil Change'
const description =
  'Call or text Joel at (985) 414-1733 or Chase at (985) 859-1628, or send a booking request. Mobile oil changes across Lafourche, Terrebonne and Assumption Parish.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    url: `${BASE_URL}/contact`,
    title,
    description,
    images: [ogImage],
  },
}

const faqs = [
  {
    q: 'Is it faster to call or to fill out the form?',
    a: 'Calling or texting is faster, and both numbers reach an owner directly. The form is the better route when you would rather write it out than talk, or when you are sending details you do not want to read off over the phone.',
  },
  {
    q: 'Why do you need my VIN?',
    a: 'So we bring the right oil and the right filter the first time. Two trucks that look identical can take different filters depending on the engine, and the VIN settles it before we load up. You will find it on the sticker inside the driver door, on the dash at the base of the windshield, or on your insurance card.',
  },
  {
    q: 'What if I am booking a generator or a mower?',
    a: 'Pick that service and the VIN field goes away, because those machines do not have one. Tell us the brand and size in the notes instead, or send a photo of the data label when we get in touch.',
  },
  {
    q: 'Will you confirm the price before you come out?',
    a: 'Always. For oil changes the cylinder count sets the number and we confirm it when we talk. For generators, mowers and fleet work we quote it before anybody drives out. Nothing gets added once we are in the driveway.',
  },
  {
    q: 'How soon can you get to me?',
    a: 'It depends on the week and where you are. Thibodaux and the surrounding Lafourche communities are usually quickest because that is where we are based. Call or text and we will tell you what is actually open rather than promise a window we cannot hold.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        h1={title}
        kicker="Call, text or book below"
        intro="Both numbers below ring an owner. Tell us what you have and where it sits and we will confirm the price and a window."
        crumbs={[{ href: '/contact', label: 'Contact' }]}
      />

      <section className="section bg-cream">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* Form first in the DOM so it is the first thing on a phone. */}
          <div id="book" className="order-1 scroll-mt-32">
            <div className="border-2 border-charcoal/15 bg-cream-dim p-6 md:p-8">
              <h2 className="text-2xl text-charcoal">Request an appointment</h2>
              <p className="mt-2 text-charcoal/80">
                The more you tell us about the vehicle, the more exact the price we can give you
                back.
              </p>
              <div className="mt-6">
                <BookingForm />
              </div>
            </div>
          </div>

          <div className="order-2">
            <h2 className="text-3xl text-charcoal sm:text-4xl">Reach us</h2>
            <div className="rule-brass mt-4" aria-hidden="true" />

            <div className="mt-8 space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.phoneRaw}
                  href={`tel:${c.phoneRaw}`}
                  className="block border-2 border-charcoal/15 bg-cream-dim p-5 transition-colors hover:border-olive"
                >
                  <span className="block text-sm font-semibold text-muted">{c.name}</span>
                  <span className="font-display text-3xl italic text-olive">{c.phoneDisplay}</span>
                  <span className="mt-1 block text-sm text-muted">Call or text</span>
                </a>
              ))}

              <a
                href={`mailto:${site.email}`}
                className="block border-2 border-charcoal/15 bg-cream-dim p-5 transition-colors hover:border-olive"
              >
                <span className="block text-sm font-semibold text-muted">Email</span>
                <span className="break-all text-lg font-semibold text-charcoal">{site.email}</span>
              </a>
            </div>

            <div className="mt-8 border-t-2 border-charcoal/10 pt-6">
              <h3 className="font-sans text-sm font-bold uppercase not-italic tracking-widest text-brass-deep">
                Where we go
              </h3>
              <p className="mt-3 leading-relaxed text-charcoal/85">
                {serviceAreas.join(', ')} and the surrounding communities across{' '}
                {parishes.join(', ')}. There is no travel charge inside the service area.
              </p>
            </div>

            <div className="mt-8 border-t-2 border-charcoal/10 pt-6">
              <h3 className="font-sans text-sm font-bold uppercase not-italic tracking-widest text-brass-deep">
                What we will tell you up front
              </h3>
              <p className="mt-3 leading-relaxed text-charcoal/85">
                If what you need is a repair rather than maintenance, we will say so instead of
                booking it. That covers breakdowns, diagnostics, electrical faults and anything on a
                generator beyond the engine itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="Before you get in touch" />

      <StickyBookingBar />
    </>
  )
}
