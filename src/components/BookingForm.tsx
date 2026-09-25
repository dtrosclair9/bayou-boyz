'use client'

import { useState } from 'react'
import { contacts, formspreeEndpoint, site } from '@/lib/site'

/**
 * Booking form. Every field is required except the notes box.
 *
 * VIN is required only for the single-vehicle services. Generators and
 * zero-turn mowers do not have one, and a fleet has many, so forcing a VIN
 * there would block those bookings outright. The field is hidden and dropped
 * from validation when the selected service does not have a VIN.
 *
 * No `_gotcha` honeypot: Akismet has flagged legitimate submissions containing
 * one on past builds.
 */

type Service = { label: string; vin: boolean }

const SERVICES: Service[] = [
  { label: 'Oil change (car, truck or SUV)', vin: true },
  { label: 'Diesel oil change', vin: true },
  { label: 'Filters, rotation, fluids or battery', vin: true },
  { label: 'Generator maintenance', vin: false },
  { label: 'Mower or small engine', vin: false },
  { label: 'Fleet or multiple vehicles', vin: false },
]

// 17 characters. I, O and Q are never used in a VIN, so they are excluded.
const VIN_PATTERN = '[A-HJ-NPR-Za-hj-npr-z0-9]{17}'
const VIN_RE = /^[A-HJ-NPR-Za-hj-npr-z0-9]{17}$/

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [service, setService] = useState('')
  const [vin, setVin] = useState('')

  const selected = SERVICES.find((s) => s.label === service)
  const needsVin = Boolean(selected?.vin)
  const vinLooksWrong = needsVin && vin.length > 0 && !VIN_RE.test(vin)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    if (!needsVin) data.delete('vin')
    data.set('_subject', `Booking request: ${service || 'Bayou Boyz'}`)
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setService('')
      setVin('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full border-2 border-charcoal/20 bg-cream px-4 py-3 text-charcoal placeholder:text-muted/70 focus:border-olive focus:outline-none'
  const label = 'block text-sm font-bold uppercase tracking-wide text-charcoal'
  const req = <span className="text-brass-deep"> *</span>

  if (status === 'sent') {
    return (
      <div className="border-2 border-olive bg-cream p-8" role="status">
        <h2 className="text-2xl text-charcoal">Request received</h2>
        <p className="mt-3 text-charcoal/85">
          Joel or Chase will get back to you to confirm the price and set a time. If you need
          something sooner, call or text {site.phoneDisplay}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <p className="text-sm text-muted">
        Everything is required except the notes at the bottom.
      </p>

      <div>
        <label htmlFor="name" className={label}>
          Name{req}
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={`mt-2 ${field}`} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={label}>
            Phone number{req}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(985) 555-0123"
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email{req}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-2 ${field}`}
          />
          <p className="mt-1 text-xs text-muted">Your service record gets emailed here.</p>
        </div>
      </div>

      <div>
        <label htmlFor="service" className={label}>
          Service type{req}
        </label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`mt-2 ${field}`}
        >
          <option value="" disabled>
            Choose a service
          </option>
          {SERVICES.map((s) => (
            <option key={s.label} value={s.label}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {needsVin && (
        <div>
          <label htmlFor="vin" className={label}>
            Vehicle VIN{req}
          </label>
          <input
            id="vin"
            name="vin"
            type="text"
            required
            maxLength={17}
            minLength={17}
            pattern={VIN_PATTERN}
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
            aria-describedby="vin-help"
            aria-invalid={vinLooksWrong || undefined}
            autoCapitalize="characters"
            spellCheck={false}
            placeholder="17 characters"
            className={`mt-2 font-mono tracking-wider ${field}`}
          />
          <p id="vin-help" className="mt-1 text-xs text-muted">
            17 characters. It is on the sticker inside the driver door, on the dash at the bottom of
            the windshield, or on your insurance card. This is how we bring the right oil and filter
            the first time.
          </p>
          {vinLooksWrong && (
            <p role="alert" className="mt-1 text-xs font-semibold text-brass-deep">
              That is {vin.length} characters. A VIN is 17, and it never contains the letters I, O
              or Q.
            </p>
          )}
        </div>
      )}

      <div>
        <label htmlFor="address" className={label}>
          Service address{req}
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          autoComplete="street-address"
          placeholder="Street, town and anything that helps us find it"
          className={`mt-2 ${field}`}
        />
        <p className="mt-1 text-xs text-muted">
          Where the vehicle or equipment will be parked when we get there.
        </p>
      </div>

      <div>
        <label htmlFor="notes" className={label}>
          Notes <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Anything that helps. For example: gate code is 1234, truck is parked under the carport out back, I work offshore so my wife will be home, please come after 5."
          className={`mt-2 ${field}`}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="border-2 border-brass-deep bg-cream p-4 text-charcoal">
          That did not go through. Call or text {contacts[0].phoneDisplay} and we will get you
          handled.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
        {status === 'sending' ? 'Sending...' : 'Send booking request'}
      </button>
    </form>
  )
}
