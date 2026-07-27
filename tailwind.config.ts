import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#111318',
          900: '#0b0d10',
        },
        primary: {
          50: '#f5f3ff',
          100: '#efe9ff',
          200: '#e6ddff',
          300: '#d3c7ff',
          400: '#bfa7ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        success: '#10b981',
        danger: '#ef4444',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        lg: '12px',
      },
      boxShadow: {
        'soft-md': '0 6px 18px rgba(8, 10, 15, 0.4)',
        'soft-sm': '0 4px 10px rgba(8, 10, 15, 0.25)'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up': 'slideUp 220ms cubic-bezier(0.16, 1, 0.3, 1) both'
      }
    }
  },
  plugins: []
};

export default config;
