import React from 'react'
import bishopImg from '../../../public/img/366491163_249188908015738_5779847465148604054_n.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div 
      style={{backgroundImage: `url(${bishopImg.src})`}}
      className='relative h-screen bg-cover bg-center bg-no-repeat'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-b from-[#49066D00] from-17% to-[#2B77EA] to-100%'>

      </div>
      {/* <Image  
        alt="Bishop's image"
        src={bishopImg}
        placeholder='blur'
        quality={100}
        className='w-full h-full object-cover'
      /> */}
    </div>
  )
}

export default Hero