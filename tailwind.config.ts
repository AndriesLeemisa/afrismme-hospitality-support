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
        'warm-ivory': '#FFFFFF',
        charcoal: {
          950: '#0B1120', // Deep Midnight Navy-Slate (Rich high-contrast dark surface & primary ink)
          900: '#0F172A', // Oxford Slate (Elevated dark section & ultra-crisp dark text)
          850: '#172033', // Elevated Navy Card surface
          800: '#1E293B', // Strong Dark Slate (High-contrast body text on light & borders on dark)
          750: '#283548',
          700: '#334155', // Clear Slate (Readable secondary text on light & borders on dark)
          600: '#475569',
          500: '#64748B',
          400: '#CBD5E1', // Crisp Light Silver (High visibility on dark backgrounds)
          300: '#E2E8F0', // Bright Ice Silver (High contrast body text on dark backgrounds)
          200: '#F1F5F9', // Near-white for dark-surface text
        },
        ivory: {
          50: '#FFFFFF',  // Pure Crisp White
          100: '#F8FAFC', // Bright Architectural Alabaster
          200: '#F1F5F9', // Clean Soft Pearl (Light alternating section & bright text on dark)
          300: '#E2E8F0', // Crisp Light Border & Bright Readable Text on Dark
          400: '#CBD5E1', // High-Visibility Silver Text on Dark
          500: '#94A3B8',
        },
        bronze: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D', // Luminous Bright Gold (High visibility on dark backgrounds)
          400: '#F59E0B', // Vibrant Warm Amber Gold
          500: '#D97706', // Rich Amber Gold (Primary CTA & Accents)
          600: '#B45309', // Deep Burnished Amber (High contrast on light backgrounds)
          700: '#92400E', // Deep Copper Bronze (WCAG AAA on light backgrounds)
          800: '#78350F',
          900: '#451A03',
        },
        naturalgreen: {
          950: '#0B1120',
          900: '#0F172A',
          850: '#172033',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
        },
      },
      // High-visibility, generous editorial type scale across all viewports
      fontSize: {
        '2xs': ['0.8125rem', { lineHeight: '1.25rem', letterSpacing: '0.03em' }],
        xs: ['0.875rem', { lineHeight: '1.4rem' }],
        sm: ['1rem', { lineHeight: '1.6rem' }],
        base: ['1.125rem', { lineHeight: '1.75rem' }],
        lg: ['1.25rem', { lineHeight: '1.8rem' }],
        xl: ['1.375rem', { lineHeight: '1.85rem' }],
        '2xl': ['1.625rem', { lineHeight: '2.1rem' }],
        '3xl': ['2rem', { lineHeight: '2.4rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.85rem' }],
        'display-1': ['clamp(2.65rem, 1.85rem + 3.5vw, 5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.15rem, 1.6rem + 2.2vw, 3.6rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-3': ['clamp(1.65rem, 1.35rem + 1.1vw, 2.35rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-4': ['clamp(1.35rem, 1.2rem + 0.5vw, 1.7rem)', { lineHeight: '1.3' }],
        lead: ['clamp(1.1875rem, 1.08rem + 0.35vw, 1.375rem)', { lineHeight: '1.7' }],
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
