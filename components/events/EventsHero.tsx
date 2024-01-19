import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const EventsHero = () => {
  return (
    <section className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>
        <header className="h-1/2 px-8 py-16 flex flex-col gap-2 justify-center items-center">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold text-white">
            
            <span className="text-[#EEE8A9]">Bishop Isijola&apos;s</span>
            {" "} Calendar of Blessings
          </h1>
          <p className="text-[#A8AABC] w-2/3 lg:w-4/12 text-center">
            Transformative Gatherings for Spiritual Growth
          </p>

          <Breadcrumb separator={'>'} className="text-gray-400">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/" className="text-gray-300">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} href="/events" className="text-gray-300">
                Events
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </header>
    </section>
  )
}

export default EventsHero