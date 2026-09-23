// Single source of truth for business identity and site-wide constants.
// Every canonical, OG tag and sitemap entry reads from BASE_URL.
export const BASE_URL = 'https://bayouboyzoil.com'

export const site = {
  name: 'Bayou Boyz Mobile Oil Changes',
  shortName: 'Bayou Boyz',
  legalName: 'Bayou Boyz Mobile Oil Changes L.L.C',
  tagline: 'We come to you. You stay rollin’.',
  // Primary contact, used for the nav CTA and every tel: link.
  phoneDisplay: '(985) 414-1733',
  phoneRaw: '+19854141733',
  email: 'bayouboyz2026@gmail.com',
  city: 'Thibodaux',
  state: 'LA',
  stateFull: 'Louisiana',
  parish: 'Lafourche Parish',
  geo: { lat: 29.7958, lng: -90.8229 },
  facebook: 'https://www.facebook.com/people/Bayou-Boyz-Mobile-Oil-Changes-LLC/61592664753079/',
}

/**
 * The client's existing Google Form booking flow, kept rather than replaced.
 * It is their "New Customer Service Request & Authorization Form", five pages,
 * and submissions already land where they expect them.
 *
 * The `ouid` parameter on the link they had published is a personal Google
 * account identifier, so it is stripped here.
 */
export const bookingUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSerDEMgWN0_K8qG5yMjqn7XHYnb3eiu4sIj9Ag5Fy10C-b83g/viewform'

/** Both owners answer the phone, so both numbers ship everywhere. */
export const contacts = [
  { name: 'Joel Cortez', phoneDisplay: '(985) 414-1733', phoneRaw: '+19854141733' },
  { name: 'Chase Stelly', phoneDisplay: '(985) 859-1628', phoneRaw: '+19858591628' },
]

/**
 * Spread into every page's openGraph. Pages that set their own openGraph do
 * NOT inherit images from the layout, so this has to be explicit each time.
 */
export const ogImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Bayou Boyz Mobile Oil Changes, mobile oil changes, diesel service and generator maintenance in Thibodaux and Houma, Louisiana',
}

export const nav = [
  { href: '/', label: 'Home' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/mobile-oil-change', label: 'Mobile Oil Change' },
      { href: '/services/mobile-diesel-oil-change', label: 'Diesel Oil Change' },
      { href: '/services/generator-maintenance', label: 'Generator Maintenance' },
      { href: '/services/small-engine-maintenance', label: 'Mower & Small Engine' },
      { href: '/services/fleet-oil-change-service', label: 'Fleet & Commercial' },
      { href: '/services/mobile-vehicle-maintenance', label: 'Vehicle Maintenance' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/service-areas', label: 'Service Areas' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/** Towns named explicitly. Houma and Terrebonne added with owner approval. */
export const serviceAreas = [
  'Thibodaux',
  'Houma',
  'Chackbay',
  'Raceland',
  'Labadieville',
  'Schriever',
  'Gray',
  'Bayou Cane',
  'Lockport',
  'Napoleonville',
]

export const parishes = ['Lafourche Parish', 'Terrebonne Parish', 'Assumption Parish']

/**
 * Trademark language required wherever Generac is named. Nominative fair use
 * only. Bayou Boyz hold no dealer authorization, so no program designation
 * ("authorized", "certified", "factory trained") may ever appear.
 */
export const generacDisclaimer =
  'Bayou Boyz is an independent maintenance service and is not an authorized Generac dealer. Generac is a trademark of Generac Power Systems, Inc.'

/**
 * Scope boundary printed on every generator page. Electrical and gas work
 * require a licensed contractor in Louisiana and Bayou Boyz do not perform it.
 */
export const generatorScopeNote =
  'Bayou Boyz service the engine on your standby generator: oil, filters, spark plugs, battery and a visual inspection. We do not perform electrical work, transfer switch work, gas line work, installation or warranty repairs. Those need a licensed electrician or the unit’s dealer.'
