import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { BASE_URL, contacts, ogImage, site } from '@/lib/site'

const title = 'Privacy Policy'
const description =
  'How Bayou Boyz Mobile Oil Changes collects, uses and protects information submitted through this website.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy' },
  openGraph: { url: `${BASE_URL}/privacy`, title, description, images: [ogImage] },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'September 22, 2026'

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        h1={title}
        kicker={`Last updated ${LAST_UPDATED}`}
        crumbs={[{ href: '/privacy', label: 'Privacy Policy' }]}
      />

      <section className="section bg-cream">
        <div className="container-wide max-w-3xl space-y-8">
          <div>
            <p className="prose-body">
              This policy explains what {site.legalName} collects through this website, why, and who
              else is involved in handling it. If anything here is unclear, call or text us and ask.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">What we collect</h2>
            <p className="mt-3 prose-body">
              This website itself does not collect anything you type. Booking runs through our
              service request and authorization form, which is hosted on Google Forms and opens in a
              separate tab. That form asks for your first and last name, your phone number, the
              address where the vehicle or equipment will be, your preferred contact method, and the
              date and time window you want. We do not ask for payment details anywhere.
            </p>
            <p className="mt-3 prose-body">
              Our hosting provider also records standard technical information for every visit, such
              as your IP address, browser type, the pages requested and the time of the request.
              That information is generated automatically by the server and is used to keep the site
              running and secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">How we use it</h2>
            <p className="mt-3 prose-body">
              We use what you send to respond to you, quote the work, schedule the visit and email
              your service record afterward. That is the whole purpose. We do not sell your
              information, we do not rent it, and we do not share it with anyone for their own
              marketing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">Third parties involved</h2>
            <p className="mt-3 prose-body">
              A few services handle data on our behalf in order for this site to work:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="border-l-4 border-olive bg-cream-dim p-4">
                <strong className="text-charcoal">Google Forms</strong>
                <span className="block text-charcoal/85">
                  Our booking and service authorization form is hosted on Google Forms. Everything
                  you enter there is collected and stored by Google on our behalf, and is subject to
                  Google&apos;s own privacy policy in addition to this one.
                </span>
              </li>
              <li className="border-l-4 border-olive bg-cream-dim p-4">
                <strong className="text-charcoal">Vercel</strong>
                <span className="block text-charcoal/85">
                  Hosts this website and generates the automatic technical logs described above.
                </span>
              </li>
              <li className="border-l-4 border-olive bg-cream-dim p-4">
                <strong className="text-charcoal">Google (Gmail)</strong>
                <span className="block text-charcoal/85">
                  Our business email runs on Gmail, so form submissions and the service records we
                  send you are stored in that account.
                </span>
              </li>
            </ul>
            <p className="mt-4 prose-body">
              The typefaces on this site are served directly from our own domain rather than
              requested from a third-party font service while you browse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">Cookies and tracking</h2>
            <p className="mt-3 prose-body">
              This website does not set advertising cookies and does not run third-party analytics
              or tracking pixels. Your browser may store ordinary technical data required to load
              pages, and our host records the server logs described above.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">How long we keep it</h2>
            <p className="mt-3 prose-body">
              We keep booking requests and service records for as long as we need them to serve you
              and to maintain your maintenance history. If you would like your information removed,
              contact us and we will take care of it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">Children</h2>
            <p className="mt-3 prose-body">
              This site is intended for adults arranging vehicle and equipment service. We do not
              knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-charcoal">Changes to this policy</h2>
            <p className="mt-3 prose-body">
              If we change how information is handled, we will update this page and the date at the
              top. This policy was last updated on {LAST_UPDATED}.
            </p>
          </div>

          <div className="border-2 border-charcoal/15 bg-cream-dim p-6">
            <h2 className="text-2xl text-charcoal">Privacy questions</h2>
            <p className="mt-3 text-charcoal/85">
              {site.legalName}
              <br />
              {site.city}, {site.state}
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
