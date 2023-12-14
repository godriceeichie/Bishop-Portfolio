import './globals.css'
import type { Metadata } from 'next'
import {lato} from './fonts'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Bishop Yomi Isijola | Giving Direction To Our Generation',
  description: "Dr. Yomi Isijola is the presiding Bishop of Logos Ministries Inc. and the founder of the International Institute of Evangelism and Communication and the International Minister's Network.",
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
          {/* <Navbar /> */}
          
          {children}
          {/* <CTA />
          <Footer2 /> */}
        </Providers>
      </body>
    </html>
  )
}
