import Link from 'next/link'
import {
  addOnNote,
  addOns,
  dieselIncludes,
  dieselPlatforms,
  dieselPrice,
  oilChangeExtraQuart,
  oilChangeIncludes,
  oilChangeTiers,
  taxNote,
} from '@/lib/pricing'
import { site } from '@/lib/site'

/**
 * Published pricing is this build's strongest content asset, so it renders as
 * real text in a table rather than inside an image. Every figure comes from
 * the client's own published price list.
 */
export default function PriceBlock({ mode }: { mode: 'oil' | 'diesel' | 'addons' | 'quote' }) {
  if (mode === 'quote') {
    return (
      <div className="border-2 border-charcoal/15 bg-cream p-6 md:p-8">
        <h3 className="text-2xl text-charcoal">Pricing</h3>
        <p className="mt-3 text-charcoal/85">
          This service is quoted per job, because the parts and the time change with the machine.
          Call or text with what you have and we will give you the number before we come out.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={`tel:${site.phoneRaw}`} className="btn-primary">
            Call {site.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-outline">
            Send us the details
          </Link>
        </div>
      </div>
    )
  }

  if (mode === 'diesel') {
    return (
      <div className="border-2 border-charcoal/15 bg-cream p-6 md:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-brass-deep">
          Heavy-duty pickups
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="font-display text-5xl italic text-olive">{dieselPrice}</span>
          <span className="text-charcoal/75">synthetic diesel oil, filter and labor</span>
        </div>
        <ul className="mt-5 space-y-2">
          {dieselIncludes.map((i) => (
            <li key={i} className="flex gap-3 text-charcoal/85">
              <span className="mt-1 h-2 w-2 shrink-0 bg-brass" aria-hidden="true" />
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">
          Fits {dieselPlatforms.join(', ')}. {taxNote}
        </p>
      </div>
    )
  }

  if (mode === 'addons') {
    return (
      <div className="border-2 border-charcoal/15 bg-cream p-6 md:p-8">
        <h3 className="text-2xl text-charcoal">Add-on pricing</h3>
        <table className="mt-5 w-full text-left">
          <caption className="sr-only">Add-on service prices</caption>
          <tbody className="divide-y divide-charcoal/10">
            {addOns.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="py-3 pr-4 font-medium text-charcoal">
                  {row.label}
                  {row.note && <span className="block text-sm font-normal text-muted">{row.note}</span>}
                </th>
                <td className="py-3 text-right font-display text-2xl italic text-olive">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-5 text-sm text-muted">
          {addOnNote} {taxNote}
        </p>
      </div>
    )
  }

  return (
    <div className="border-2 border-charcoal/15 bg-cream p-6 md:p-8">
      <p className="text-sm font-bold uppercase tracking-widest text-brass-deep">
        Full synthetic, filter and labor
      </p>
      <table className="mt-4 w-full text-left">
        <caption className="sr-only">Standard oil change pricing by cylinder count</caption>
        <tbody className="divide-y divide-charcoal/10">
          {oilChangeTiers.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="py-3 pr-4 font-medium text-charcoal">
                {row.label}
                {row.note && <span className="block text-sm font-normal text-muted">{row.note}</span>}
              </th>
              <td className="py-3 text-right font-display text-3xl italic text-olive">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="mt-5 space-y-2">
        {oilChangeIncludes.map((i) => (
          <li key={i} className="flex gap-3 text-charcoal/85">
            <span className="mt-1 h-2 w-2 shrink-0 bg-brass" aria-hidden="true" />
            {i}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-muted">
        {oilChangeExtraQuart}. {taxNote}
      </p>
    </div>
  )
}
