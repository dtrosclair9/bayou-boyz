import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BASE_URL, ogImage, site } from '@/lib/site'
import './globals.css'

// Matches the approved brand kit: Barlow Condensed ExtraBold Italic for
// display, Barlow for everything else.
const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const body = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Mobile Oil Change in Thibodaux & Houma, LA | Bayou Boyz',
    // Per-page titles must NOT repeat the brand, or it renders as "Brand | Brand".
    template: '%s | Bayou Boyz',
  },
  description:
    'Full synthetic mobile oil changes at your home or job site in Thibodaux, Houma, Raceland and Chackbay. Cars, trucks, SUVs and diesel. From $100.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: site.name,
    title: 'Mobile Oil Change in Thibodaux & Houma, LA | Bayou Boyz',
    description:
      'Full synthetic mobile oil changes at your home or job site across Lafourche and Terrebonne Parish. Cars, trucks, SUVs, diesel and standby generators.',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Oil Change in Thibodaux & Houma, LA | Bayou Boyz',
    description:
      'Full synthetic mobile oil changes at your home or job site across Lafourche and Terrebonne Parish.',
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta name="geo.region" content="US-LA" />
        <meta name="geo.placename" content="Thibodaux, Louisiana" />
        <meta name="geo.position" content={`${site.geo.lat};${site.geo.lng}`} />
        <meta name="ICBM" content={`${site.geo.lat}, ${site.geo.lng}`} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-olive focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
