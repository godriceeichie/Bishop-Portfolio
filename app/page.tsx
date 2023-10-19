import Image from 'next/image'
import { HomeAbout, HomeCTA, HomeHero, HomeTestimonies} from './components'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeTestimonies />
      <HomeCTA />
    </>
  )
}
