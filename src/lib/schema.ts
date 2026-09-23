import { BASE_URL, contacts, parishes, serviceAreas, site } from './site'

/**
 * Bayou Boyz are a service-area business with no public storefront, so
 * LocalBusiness carries areaServed and deliberately omits a street address.
 *
 * No aggregateRating anywhere. Self-serving review markup is both against
 * Google's guidelines and untrue here, since the business has no review base.
 */
export const localBusinessId = `${BASE_URL}/#business`
const joelId = `${BASE_URL}/about#joel-cortez`
const chaseId = `${BASE_URL}/about#chase-stelly`

export const peopleSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': joelId,
    name: 'Joel Cortez',
    telephone: contacts[0].phoneRaw,
    jobTitle: 'Owner',
    worksFor: { '@id': localBusinessId },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': chaseId,
    name: 'Chase Stelly',
    telephone: contacts[1].phoneRaw,
    jobTitle: 'Owner',
    worksFor: { '@id': localBusinessId },
  },
]

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': localBusinessId,
  name: site.name,
  legalName: site.legalName,
  url: BASE_URL,
  telephone: site.phoneRaw,
  email: site.email,
  image: `${BASE_URL}/images/og-image.jpg`,
  logo: `${BASE_URL}/images/logo.png`,
  description:
    'Mobile oil changes, diesel oil changes, standby generator maintenance and small engine service across Lafourche, Terrebonne and Assumption Parish, Louisiana. Bayou Boyz travel to the customer at home, at work or on the job site.',
  slogan: site.tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: [
    ...serviceAreas.map((a) => ({ '@type': 'City', name: `${a}, LA` })),
    ...parishes.map((p) => ({ '@type': 'AdministrativeArea', name: `${p}, Louisiana` })),
  ],
  founder: [{ '@id': joelId }, { '@id': chaseId }],
  employee: [{ '@id': joelId }, { '@id': chaseId }],
  sameAs: [site.facebook],
  priceRange: '$$',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: site.name,
  publisher: { '@id': localBusinessId },
  inLanguage: 'en-US',
}

/** Service schema. `offer` is only passed for services the client has priced. */
export function serviceSchema({
  name,
  description,
  url,
  serviceType,
  areaName,
  offers,
}: {
  name: string
  description: string
  url: string
  serviceType: string
  areaName?: string
  offers?: { price: string; description: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: { '@id': localBusinessId },
    areaServed: areaName
      ? { '@type': 'City', name: `${areaName}, LA` }
      : [
          ...serviceAreas.map((a) => ({ '@type': 'City', name: `${a}, LA` })),
          ...parishes.map((p) => ({ '@type': 'AdministrativeArea', name: `${p}, Louisiana` })),
        ],
    ...(offers?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${name} pricing`,
            itemListElement: offers.map((o) => ({
              '@type': 'Offer',
              price: o.price.replace('$', ''),
              priceCurrency: 'USD',
              description: o.description,
            })),
          },
        }
      : {}),
  }
}

export function itemListSchema(items: { name: string; url: string }[], name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  }
}
