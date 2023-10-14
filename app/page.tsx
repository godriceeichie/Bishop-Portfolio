import Image from 'next/image'
import { HomeAbout, HomeCTA, HomeHero} from './components'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeCTA />
    </>
  )
}
