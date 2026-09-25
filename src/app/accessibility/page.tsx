import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { BASE_URL, contacts, ogImage, site } from '@/lib/site'

const title = 'Accessibility'
const description =
  'How Bayou Boyz Mobile Oil Changes approaches website accessibility, and how to reach us if something on this site is not working for you.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/accessibility' },
  openGraph: { url: `${BASE_URL}/accessibility`, title, description, images: [ogImage] },
}

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        h1={title}
        kicker="Using this site"
        crumbs={[{ href: '/accessibility', label: 'Accessibility' }]}
      />

      <section className="section bg-cream">
        <div className="container-wide max-w-3xl space-y-8">
          <p className="prose-body">
            This site is built to be usable by as many people as possible, including anyone using a
            screen reader, keyboard navigation or browser zoom.
          </p>

          <div>
            <h2 className="text-2xl text-charcoal">What we have done</h2>
            <ul className="mt-4 space-y-3">
              {[
                'Text and background colors meet WCAG 2.2 AA contrast ratios',
                'Every page works by keyboard, with a visible focus outline and a skip link',
                'One H1 per page with headings in order, so structure is navigable by screen reader',
                'Images carry alt text describing what is actually in them',
                'Form fields have real labels rather than placeholder text standing in for them',
                'Layouts reflow without horizontal scrolling down to a 320 pixel viewport',
                'Answers in FAQ sections are present in the page rather than hidden behind script',
              ].map((i) => (
                <li key={i} className="flex gap-3 border-l-4 border-olive bg-cream-dim p-4">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-brass" aria-hidden="true" />
                  <span className="text-charcoal/85">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">The booking form</h2>
            <p className="mt-3 prose-body">
              Every field on the booking form has a real label, required fields are marked in the
              label rather than by color alone, and errors are announced to screen readers. If the
              form is difficult for you to use for any reason, call or text either number below and
              we will take your booking over the phone instead.
            </p>
          </div>

          <div className="border-2 border-charcoal/15 bg-cream-dim p-6">
            <h2 className="text-2xl text-charcoal">Tell us if something is broken</h2>
            <p className="mt-3 text-charcoal/85">
              If any part of this site gets in your way, we want to know and we will fix it.
            </p>
            <ul className="mt-3 space-y-1">
              {contacts.map((c) => (
                <li key={c.phoneRaw} className="text-charcoal/85">
                  {c.name}:{' '}
                  <a href={`tel:${c.phoneRaw}`} className="text-brass-deep underline">
                    {c.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block break-all text-brass-deep underline"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
