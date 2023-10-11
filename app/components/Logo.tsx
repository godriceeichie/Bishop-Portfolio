import { Pacifico } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import { monarda } from '../fonts'

const Logo = () => {
  return (
    <h1 className={`${monarda.className} text-[#bdd5f8] text-2xl`}>
      <Link href={'/'}>Yomi Isijola</Link>
    </h1>
  )
}

export default Logo