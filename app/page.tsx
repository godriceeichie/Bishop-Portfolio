import Image from 'next/image'
import { HomeDevotionalCTA, HomeAbout, HomeCTA, HomeHero, HomeTestimonies} from './components'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeDevotionalCTA />
      <HomeTestimonies />
      <HomeCTA />
    </>
  )
}
