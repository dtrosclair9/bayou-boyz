/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    // Security headers on every route (Strykora 2026 standard). CSP is left out
    // on purpose — a strict policy needs per-site testing against inline styles,
    // fonts, and Vercel Analytics; add it once validated.
    const securityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ]
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  async redirects() {
    return [
      // Printed QR codes point at /card rather than at "/" so the destination
      // stays ours to change after the cards are in someone's wallet.
      //
      // permanent: false is deliberate. A 308 gets cached by the browser more
      // or less forever, which would defeat the entire point of routing the QR
      // through a path we control. Keep this a 307.
      { source: '/card', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
