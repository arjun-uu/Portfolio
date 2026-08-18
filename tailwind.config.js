/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        slate: {
          50: 'var(--color-slate-50)',
          100: 'var(--color-slate-100)',
          200: 'var(--color-slate-200)',
          300: 'var(--color-slate-300)',
          400: 'var(--color-slate-400)',
          500: 'var(--color-slate-500)',
          600: 'var(--color-slate-600)',
          700: 'var(--color-slate-700)',
          800: 'var(--color-slate-800)',
          900: 'var(--color-slate-900)',
          950: 'var(--color-slate-950)',
        },
        brand: {
          bg: {
            dark: 'var(--color-bg-dark)',
            panel: 'var(--color-bg-panel)',
            panelLight: 'var(--color-bg-panelLight)',
          },
          border: {
            dark: 'var(--color-border-dark)',
            light: 'var(--color-border-light)',
          },
          accent: {
            primary: 'var(--color-accent-primary)',
            secondary: 'var(--color-accent-secondary)',
            purple: 'var(--color-accent-purple)',
            orange: 'var(--color-accent-orange)',
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Source Code Pro', 'monospace'],
        serif: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'subtle-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.1), 0 0 10px rgba(16, 185, 129, 0.05)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.25), 0 0 30px rgba(6, 182, 212, 0.15)' },
        }
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(16, 185, 129, 0.15)',
        'glow-secondary': '0 0 15px rgba(6, 182, 212, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
