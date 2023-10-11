import localFont from 'next/font/local'
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const lato = localFont({
  src: './utils/fonts/lato/Lato-Regular.ttf'
})

export const monarda = localFont({
  src: './utils/fonts/monarda/Monarda.ttf'
})

