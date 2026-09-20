/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--color-background)',
          subtle: 'var(--color-background-subtle)',
          muted: 'var(--color-background-muted)',
          elevated: 'var(--color-background-elevated)',
        },
        foreground: {
          DEFAULT: 'var(--color-foreground)',
          muted: 'var(--color-foreground-muted)',
          subtle: 'var(--color-foreground-subtle)',
          faint: 'var(--color-foreground-faint)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          subtle: '#4C1D95',
          faint: '#2E1065',
          soft: '#A78BFA',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          soft: '#22D3EE',
          faint: '#164E63',
        },
        emerald: {
          DEFAULT: '#10B981',
          soft: '#34D399',
          faint: '#064E3B',
        },
        slate: {
          DEFAULT: '#64748B',
          soft: '#94A3B8',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cal Sans', 'Inter Variable', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-lg': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'section': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'content': '72rem',
        'prose': '65ch',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(139 92 246 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'grid-pattern-light': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(139 92 246 / 0.12)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'radial-fade': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'violet-glow': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(139, 92, 246, 0.15)',
        'glow-sm': '0 0 20px rgba(139, 92, 246, 0.1)',
        'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'soft-dark': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};