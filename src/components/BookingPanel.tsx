import { bookingUrl, contacts, site } from '@/lib/site'

/**
 * The client already runs bookings through their own Google Form ("New
 * Customer Service Request & Authorization Form"), so this links out to it
 * rather than replacing it with a form of our own.
 *
 * It links instead of iframing on purpose: the form runs five pages, and an
 * embedded multi-page Google Form is a poor experience on a phone, which is
 * where most of this traffic will land.
 */
export default function BookingPanel() {
  return (
    <div className="border-2 border-charcoal/15 bg-cream-dim p-6 md:p-8">
      <h2 className="text-2xl text-charcoal">Request an appointment</h2>
      <p className="mt-3 leading-relaxed text-charcoal/85">
        Bayou Boyz take new bookings through their service request form. It asks for your name and
        number, the address where the vehicle will be, and the day and time window that suits you.
      </p>

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener"
        className="btn-primary mt-6 w-full"
      >
        Open the booking form
      </a>

      <p className="mt-3 text-sm text-muted">
        Opens in a new tab. It also covers the service authorization, so everything is handled in
        one place before we come out.
      </p>

      <div className="mt-8 border-t-2 border-charcoal/10 pt-6">
        <h3 className="font-sans text-sm font-bold uppercase not-italic tracking-widest text-brass-deep">
          Rather just call
        </h3>
        <p className="mt-2 text-sm text-charcoal/80">
          Both numbers reach an owner directly. Texting works the same as calling.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {contacts.map((c) => (
            <a
              key={c.phoneRaw}
              href={`tel:${c.phoneRaw}`}
              className="border-2 border-charcoal/15 bg-cream p-4 transition-colors hover:border-olive"
            >
              <span className="block text-sm font-semibold text-muted">{c.name}</span>
              <span className="font-display text-2xl italic text-olive">{c.phoneDisplay}</span>
            </a>
          ))}
        </div>
        <a
          href={`mailto:${site.email}`}
          className="mt-3 inline-block break-all text-sm text-brass-deep underline"
        >
          {site.email}
        </a>
      </div>
    </div>
  )
}
