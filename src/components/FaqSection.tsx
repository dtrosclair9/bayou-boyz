import JsonLd from './JsonLd'
import type { Faq } from '@/lib/services'

/**
 * FAQ block plus its FAQPage schema. Question-led headings with the direct
 * answer in the first sentence, which is the shape AI Overviews lift.
 *
 * Rendered as open <details> by default so the answer text is present in the
 * DOM for crawlers and readable without JavaScript.
 */
export default function FaqSection({
  faqs,
  heading = 'Common questions',
  intro,
  tone = 'light',
}: {
  faqs: Faq[]
  heading?: string
  intro?: string
  tone?: 'light' | 'dark'
}) {
  if (!faqs.length) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const dark = tone === 'dark'

  return (
    <section className={`section ${dark ? 'bg-charcoal' : 'bg-cream-dim'}`}>
      <JsonLd data={schema} />
      <div className="container-wide">
        <div className="max-w-3xl">
          <h2 className={`text-3xl sm:text-4xl ${dark ? 'text-cream' : 'text-charcoal'}`}>
            {heading}
          </h2>
          <div className={`mt-4 h-1 w-16 ${dark ? 'bg-brass-light' : 'bg-brass'}`} aria-hidden="true" />
          {intro && (
            <p className={`mt-5 text-lg ${dark ? 'text-cream/85' : 'text-charcoal/85'}`}>{intro}</p>
          )}
        </div>

        <div className="mt-10 max-w-3xl divide-y divide-charcoal/15">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5" open>
              <summary
                className={`flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-bold ${
                  dark ? 'text-cream' : 'text-charcoal'
                }`}
              >
                <h3 className="font-sans text-lg font-bold normal-case not-italic tracking-normal">
                  {f.q}
                </h3>
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 transition-transform group-open:rotate-45 ${
                    dark ? 'text-brass-light' : 'text-brass-deep'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </summary>
              <p className={`mt-3 leading-relaxed ${dark ? 'text-cream/85' : 'text-charcoal/85'}`}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
