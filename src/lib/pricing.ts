/**
 * Every number in this file is the client's own published price, taken from
 * their price list. Nothing here is estimated or inferred. If a service is not
 * priced below it is because the client has not set a price yet, and the copy
 * must route to "call or text for a quote" rather than invent one.
 */

export type PriceRow = {
  label: string
  price: string
  note?: string
}

export const oilChangeTiers: PriceRow[] = [
  { label: '4-cylinder', price: '$100', note: 'Includes 4 to 5 quarts' },
  { label: '6-cylinder', price: '$115', note: 'Includes 6 to 7 quarts' },
  { label: '8-cylinder', price: '$130', note: 'Includes 7 to 8 quarts' },
]

export const oilChangeIncludes = [
  'Full synthetic oil',
  'New oil filter',
  'Full drain and refill to manufacturer spec',
  'Visual inspection',
  'Service record emailed to you',
]

export const oilChangeExtraQuart = '$10 per additional quart'

export const dieselPrice = '$200'

export const dieselIncludes = [
  'Synthetic diesel oil, 10 quarts included',
  'New oil filter',
  'Full drain and refill to manufacturer spec',
  'Visual inspection',
  'Service record emailed to you',
]

export const dieselPlatforms = ['F-250', 'F-350', '2500', '3500']

export const addOns: PriceRow[] = [
  { label: 'Air filter or cabin air filter', price: '$10', note: '$15 for both' },
  { label: 'Tire rotation and pressure check', price: '$40', note: 'Stock tires only' },
  { label: 'Fluid top-off', price: '$10', note: 'Washer fluid and coolant' },
  { label: 'Wiper blade replacement', price: '$10' },
  { label: 'Battery testing', price: '$10', note: 'Printed readings' },
]

/**
 * Add-on prices are labor only. The client bills materials separately at
 * market price, and this sentence has to appear wherever add-ons are listed.
 */
export const addOnNote =
  'Add-on prices cover labor. Parts and materials are billed separately at market price.'

export const taxNote = 'Sales tax is added to the total.'

/** Services the client has not priced yet. Never guess a number for these. */
export const quoteOnly = [
  'Standby generator maintenance',
  'Zero-turn mower and small engine service',
  'Fleet and multi-vehicle accounts',
]
