import React from 'react'
import bishopImg from '../../public/img/366491163_249188908015738_5779847465148604054_n.jpg'
import Image from 'next/image'
import { AiOutlineYoutube } from 'react-icons/ai'
import Link from 'next/link'

const Hero = () => {
  return (
    <div 
      style={{backgroundImage: `url(${bishopImg.src})`}}
      className='relative h-[85dvh] bg-cover bg-center bg-no-repeat'
    >
      <div className='flex items-center justify-center px-4 lg:px-8 absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-b from-[#49066D00] from-17% to-[#2B77EA] to-100%'>
        <div className='flex flex-col items-center lg:items-start gap-4'>
          <h1 className='font-semibold text-white text-2xl lg:text-4xl lg:w-1/2 text-center lg:text-left'>Welcome to Bishop Yomi Isijola Official Website</h1>
          <Link href={'https://www.youtube.com/@logosministries321'} target='_blank' className='bg-red flex items-center gap-2 bg-accent-color text-base text-white px-4 py-2 rounded'>Watch live on <AiOutlineYoutube size={25}/></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero