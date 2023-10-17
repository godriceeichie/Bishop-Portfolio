import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import {fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'accent-color': "#F20459",
        'primary-color': "#2B77EA"
      },
      fontFamily:{
        sans: ['var(--font-inter)'],
        mono: ['var(--font-pacifico)'],
        lobster: ['var(--font-lobster)', ...fontFamily.sans]
      }
    },
  },
  plugins: [
    nextui()
  ],
}
export default config
