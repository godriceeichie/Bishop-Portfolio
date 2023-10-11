import type { Config } from 'tailwindcss'
import {fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'accent-color': "#F20459"
      },
      fontFamily:{
        sans: ['var(--font-inter)'],
        mono: ['var(--font-pacifico)'],
        lobster: ['var(--font-lobster)', ...fontFamily.sans]
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}
export default config
