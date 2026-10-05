import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#08090B',
          900: '#0E1014',
          850: '#14171E',
          800: '#1B1F27',
          750: '#232833',
          700: '#2C3240',
          600: '#3D4454',
          500: '#5A6275',
          400: '#848D9F',
        },
        ivory: {
          50: '#FCFBF9',
          100: '#F7F4EE',
          200: '#EFE9DF',
          300: '#DDD4C4',
          400: '#C7BBA7',
          500: '#B0A18C',
        },
        bronze: {
          100: '#F8F3EA',
          200: '#EFE5D2',
          300: '#E2CDAA',
          400: '#D4B886',
          500: '#C5A880', // Signature Champagne Bronze
          600: '#A98754',
          700: '#87693B',
          800: '#644B27',
          900: '#433119',
        },
        naturalgreen: {
          950: '#0A130E',
          900: '#0F1D15',
          850: '#14251B',
          800: '#1A3023',
          700: '#244533',
          600: '#336148',
          500: '#478463',
        },
      },
      // Harmonised editorial type scale (fluid, ratio ~1.25 → 1.333 across viewports)
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.04em' }],
        'display-1': ['clamp(2.5rem, 1.55rem + 3.8vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-2': ['clamp(2rem, 1.45rem + 2.2vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-3': ['clamp(1.5rem, 1.25rem + 1vw, 2.125rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        'display-4': ['clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)', { lineHeight: '1.25' }],
        lead: ['clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)', { lineHeight: '1.65' }],
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
        cinematic: '0.22em',
      },
      boxShadow: {
        'subtle-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'elevated-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.65)',
        'bronze-glow': '0 0 30px -5px rgba(197, 168, 128, 0.25)',
        'bronze-hover': '0 15px 35px -10px rgba(197, 168, 128, 0.35)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
