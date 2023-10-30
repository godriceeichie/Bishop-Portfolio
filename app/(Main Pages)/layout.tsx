import { CTA, Navbar } from '@/components'
import Footer2 from '@/components/Footer2'
import React from 'react'

const Navigation = ({children} : {children: React.ReactNode}) => {
  return (
    <>
        <Navbar />
        {children}
        <CTA />
        <Footer2 />
    </>
  )
}

export default Navigation