import JsonLd from './JsonLd'

/**
 * Numbered process band with HowTo schema attached. Used on the homepage and
 * on every service page, where the steps are written per service rather than
 * shared, so the schema describes that specific job.
 */
export default function ProcessSteps({
  steps,
  heading = 'How it works',
  name,
  tone = 'light',
}: {
  steps: { title: string; body: string }[]
  heading?: string
  name: string
  tone?: 'light' | 'dark'
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  }

  const dark = tone === 'dark'

  return (
    <section className={`section ${dark ? 'bg-charcoal' : 'bg-cream'}`}>
      <JsonLd data={schema} />
      <div className="container-wide">
        <h2 className={`text-3xl sm:text-4xl ${dark ? 'text-cream' : 'text-charcoal'}`}>
          {heading}
        </h2>
        <div className={`mt-4 h-1 w-16 ${dark ? 'bg-brass-light' : 'bg-brass'}`} aria-hidden="true" />

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`border-t-4 pt-5 ${dark ? 'border-brass-light' : 'border-olive'}`}
            >
              <span
                className={`font-display text-4xl italic ${
                  dark ? 'text-brass-light' : 'text-brass-deep'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className={`mt-2 font-sans text-lg font-bold normal-case not-italic tracking-normal ${
                  dark ? 'text-cream' : 'text-charcoal'
                }`}
              >
                {s.title}
              </h3>
              <p className={`mt-2 leading-relaxed ${dark ? 'text-cream/80' : 'text-charcoal/80'}`}>
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
