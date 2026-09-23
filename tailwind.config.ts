import type { Config } from 'tailwindcss'

/**
 * Bayou Boyz palette — taken from the approved brand kit
 * (06-brand-guide/brand-tokens.json), split by element type so WCAG fixes
 * never flatten the brand. Brass is the problem child: #A78238 on cream is
 * 3.13:1, so it is display/icon/rule only. brass-deep carries small accent
 * text on light, brass-light carries accent text on charcoal.
 */
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F0E5',
        'cream-dim': '#E8E2D2',
        olive: '#596330',
        'olive-dark': '#414927',
        'olive-deep': '#2F3620',
        moss: '#808B53',
        charcoal: '#222321',
        'charcoal-soft': '#33352F',
        brass: '#A78238',
        'brass-deep': '#7A5E24',
        'brass-light': '#C9A253',
        // Small accent text on the olive field needs 4.5:1, which #C9A253
        // cannot reach there (2.70:1). This pale gold hits 4.77:1 on olive and
        // still reads as brass rather than washing out to white.
        'brass-pale': '#F0DCA8',
        // Brand kit value is #64685B, which lands at 4.42:1 on cream-dim and
        // just misses AA. Darkened to 5.05:1. Same muted olive-grey, legal.
        muted: '#5C6054',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wide: '78rem',
      },
    },
  },
  plugins: [],
}

export default config
