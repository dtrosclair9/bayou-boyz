import Image from 'next/image'
import Reveal from './Reveal'

/**
 * Real jobs from the client's own Facebook page. This band exists because the
 * business has no review base yet, so photographed work is the trust
 * substitute. Nothing here is stock or generated.
 *
 * Every tile is a visibly different vehicle and setting. The source set had
 * several near-duplicate pairs of the same car; those were collapsed to one
 * each so no two tiles read as the same job.
 */
const work = [
  {
    src: '/images/work-1.jpg',
    alt: 'A red Toyota Tundra with the hood up in a driveway during a Bayou Boyz mobile oil change',
  },
  {
    src: '/images/work-2.jpg',
    alt: 'A white Toyota Tacoma with the hood up under a carport being serviced at home',
  },
  {
    src: '/images/work-3.jpg',
    alt: 'A blue SUV with the hood up, parked on the grass beside a driveway during a service call',
  },
  {
    src: '/images/work-4.jpg',
    alt: 'A Bayou Boyz technician working underneath a white pickup with a fender cover laid over the grille',
  },
  {
    src: '/images/work-5.jpg',
    alt: 'A Nissan sedan with the hood up under a carport during a mobile oil change',
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

export default function WorkGallery() {
  return (
    <section className="section bg-cream-dim">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-charcoal sm:text-4xl">Driveways, carports and yards</h2>
          <div className="rule-brass mt-4" aria-hidden="true" />
          <p className="mt-5 prose-body">
            Every one of these is an actual Bayou Boyz job. No shop, no lift, no waiting room.
            Whatever was parked at the house that day is what got serviced.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {work.map((w, i) => (
            <li key={w.src}>
              <Reveal delay={(i % 4) * 0.05}>
                <div className="relative aspect-square w-full overflow-hidden border-4 border-charcoal bg-olive">
                  <Image
                    src={w.src}
                    alt={w.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
