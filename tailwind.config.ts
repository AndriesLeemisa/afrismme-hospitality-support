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
        'warm-ivory': '#FAF8F5',
        charcoal: {
          950: '#132A1F', // Deep Cypress Forest Green (replaces pitch black)
          900: '#1B3B2B', // Signature Botanical Forest Green
          850: '#214634', // Elevated Botanical Green
          800: '#28523E', // Rich Emerald Slate
          750: '#316149',
          700: '#3C7257',
          600: '#52876C',
          500: '#74A089',
          400: '#9BBAA9',
          300: '#C2D6CB',
        },
        ivory: {
          50: '#FCFBF9',
          100: '#FAF8F5', // Warm Architectural Ivory
          200: '#F3EDE2', // Warm Architectural Sand
          300: '#E5DEC9',
          400: '#C8BDA8',
          500: '#9A8F7E',
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
          950: '#132A1F',
          900: '#1B3B2B',
          850: '#214634',
          800: '#28523E',
          700: '#34664D',
          600: '#437D60',
          500: '#589676',
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
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'float-gentle': 'floatGentle 3.5s ease-in-out infinite',
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
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
