import { Footer, Navbar } from './components'
import './globals.css'
import type { Metadata } from 'next'
import {lato} from './fonts'
import Footer2 from './components/Footer2'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Bishop Yomi Isijola | Official Website',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>
          <Navbar />
          {/* <Navbar2 /> */}
          {children}
          <Footer2 />
        </Providers>
      </body>
    </html>
  )
}
