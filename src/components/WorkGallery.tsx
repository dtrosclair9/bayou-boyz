import Image from 'next/image'
import Reveal from './Reveal'

/**
 * Real jobs from the client's own Facebook page. The business has no review
 * base yet, so photographed work is the trust substitute. Nothing here is
 * stock or generated.
 *
 * The before/after pairs are the point of this section. Each pair is the same
 * engine bay, same angle, same visit. Which frame is "before" was decided by
 * looking at them: the before has a chalky grey dust film on the plastics and
 * the after has them back to black. Do not reorder these without re-checking
 * the photos, because a flipped pair reads as a lie.
 */
const pairs = [
  {
    before: '/images/ba-1-before.jpg',
    after: '/images/ba-1-after.jpg',
    beforeAlt:
      'A Ford Expedition engine bay before service, with a grey film of dust across the radiator cover and engine cover',
    afterAlt:
      'The same Ford Expedition engine bay after service, with the covers wiped back to black',
    caption: 'Ford Expedition',
  },
  {
    before: '/images/ba-2-before.jpg',
    after: '/images/ba-2-after.jpg',
    beforeAlt:
      'A pickup engine bay before service, dusty and faded across the intake and surrounding plastics',
    afterAlt: 'The same pickup engine bay after service, cleaned up and noticeably darker',
    caption: 'Full-size pickup',
  },
  {
    before: '/images/ba-3-before.jpg',
    after: '/images/ba-3-after.jpg',
    beforeAlt:
      'A Jeep Cherokee engine bay before service, with dust dulling the engine cover and radiator shroud',
    afterAlt:
      'The same Jeep Cherokee engine bay after service, with the engine cover lettering legible again',
    caption: 'Jeep Cherokee',
  },
]

/** Single shots from other jobs. None of these belong to a pair above. */
const strip = [
  {
    src: '/images/work-1.jpg',
    alt: 'A red Toyota Tundra with the hood up in a driveway during a Bayou Boyz mobile oil change',
  },
  {
    src: '/images/work-2.jpg',
    alt: 'A white Toyota Tacoma with the hood up under a carport being serviced at home',
  },
  {
    src: '/images/work-4.jpg',
    alt: 'A Bayou Boyz technician working underneath a white pickup with a fender cover laid over the grille',
  },
  {
    src: '/images/work-6.jpg',
    alt: 'A Ford pickup with the hood up inside a shop building being serviced on site',
  },
  {
    src: '/images/work-7.jpg',
    alt: 'A Ford SUV with the hood up in a yard in the late afternoon during a service call',
  },
  {
    src: '/images/work-8.jpg',
    alt: 'A dark SUV with the hood up in a carport, with a fender cover protecting the paint',
  },
]

function Frame({
  src,
  alt,
  label,
}: {
  src: string
  alt: string
  label: string
}) {
  return (
    <figure className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-4 border-charcoal bg-olive">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 45vw, 22vw" className="object-cover" />
        <figcaption className="absolute left-0 top-0 bg-charcoal px-3 py-1 text-xs font-bold uppercase tracking-widest text-cream">
          {label}
        </figcaption>
      </div>
    </figure>
  )
}

export default function WorkGallery() {
  return (
    <section className="section bg-cream-dim">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-charcoal sm:text-4xl">Before and after, same visit</h2>
          <div className="rule-brass mt-4" aria-hidden="true" />
          <p className="mt-5 prose-body">
            Bayou Boyz photograph the engine bay on the way in and on the way out. These are their
            own shots, same vehicle and same angle in each pair, taken minutes apart in somebody
            {'’'}s driveway.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {pairs.map((p, i) => (
            <Reveal key={p.before} delay={i * 0.07}>
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <Frame src={p.before} alt={p.beforeAlt} label="Before" />
                  <Frame src={p.after} alt={p.afterAlt} label="After" />
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-brass-deep">
                  {p.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t-2 border-charcoal/10 pt-10">
          <h3 className="font-sans text-xl font-bold normal-case not-italic tracking-normal text-charcoal">
            Driveways, carports and yards
          </h3>
          <p className="mt-2 max-w-2xl text-charcoal/85">
            Whatever was parked at the house that day is what got serviced. No shop, no lift, no
            waiting room.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
            {strip.map((w, i) => (
              <li key={w.src}>
                <Reveal delay={(i % 6) * 0.04}>
                  <div className="relative aspect-square w-full overflow-hidden border-4 border-charcoal bg-olive">
                    <Image
                      src={w.src}
                      alt={w.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 16vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
