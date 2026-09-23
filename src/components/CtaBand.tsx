import Link from 'next/link'
import { contacts } from '@/lib/site'

/**
 * Solid olive band. Deliberately not a faded photo behind a dark overlay,
 * which had become a house tic across past builds.
 *
 * Copy varies per placement rather than repeating one CTA sentence sitewide.
 */
export default function CtaBand({
  heading,
  body,
}: {
  heading: string
  body: string
}) {
  return (
    <section className="bg-olive py-14 md:py-20">
      <div className="container-wide">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl text-cream sm:text-4xl">{heading}</h2>
            <div className="mt-4 h-1 w-16 bg-brass-light" aria-hidden="true" />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90">{body}</p>
          </div>

          <div className="space-y-3">
            {contacts.map((c) => (
              <a
                key={c.phoneRaw}
                href={`tel:${c.phoneRaw}`}
                className="btn-cream w-full justify-between"
              >
                <span>{c.name}</span>
                <span className="font-display text-xl italic">{c.phoneDisplay}</span>
              </a>
            ))}
            <Link
              href="/contact"
              className="btn w-full border-2 border-cream text-cream hover:bg-cream hover:text-olive"
            >
              Send a booking request
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
