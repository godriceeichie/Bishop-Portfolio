import Link from "next/link";
import bishopImg from "../../public/img/366491163_249188908015738_5779847465148604054_n.jpg";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const GalleryHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bishopImg.src})` }}
      className="relative h-[75dvh] bg-cover bg-center bg-no-repeat mb-3"
    >
      <div className="flex items-center px-4 lg:px-8 absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-b from-[#49066D00] from-17% to-[#2B77EA] to-100%">
        <div className="flex flex-col lg:items-start gap-4">
          <h1 className="font-semibold text-white text-2xl lg:text-4xl text-center lg:text-left">
            Gallery Page
          </h1>
          {/* <Link href={'https://www.youtube.com/@logosministries321'} target='_blank' className='bg-red flex items-center gap-2 bg-accent-color text-base text-white px-4 py-2 rounded'>Watch live on <AiOutlineYoutube size={25}/></Link> */}

          <Breadcrumb separator={'>'} className="text-gray-400">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/" className="text-gray-300">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} href="/gallery" className="text-gray-300">
                Gallery
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
    // <div className='h-[60dvh] bg-gradient-to-br from-[#0047B0] to-[#2B78EA]'></div>
  );
};

export default GalleryHero;
