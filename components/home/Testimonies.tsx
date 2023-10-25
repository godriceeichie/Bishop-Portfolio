"use client";
import React, { useEffect, useState } from "react";
import bg from '../../public/img/21-removebg.png'
import Image from "next/image";
import TestimonySlide from "./Testimony";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialSlideBtn from "./TestimonySlideBtn";
import { getTestimonies } from "@/sanity/sanity.query";
import { TestimoniesType } from "@/types";

const Testimonies = () => {
  const [data, setData] = useState<TestimoniesType[]>()
  useEffect(() =>{
    const fetchData = async () => {
      const testimonies: TestimoniesType[] = await getTestimonies()
      setData(testimonies)
    }
    fetchData()
  }, [])
  return (
    <section className="relative mt-10 lg:mt-24">
      <h2 className="text-center text-3xl mb-3 text-[#001D78] font-semibold">Testimonies of God's Goodness</h2>
      <div className="p-12 lg:p-24 bg-inherit">
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="relative"
        >
          <TestimonialSlideBtn />
          {/* <SwiperSlide>

            <TestimonySlide />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonySlide />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonySlide />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonySlide />
          </SwiperSlide> */}
          {data && data.map(data => {
            return(
              <SwiperSlide key={data._id}>
                <TestimonySlide name={data.name} content={data.content}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <Image
        src={bg}
        alt="testimony section background"
        fill={true}
        className="bottom-0"
      />
    </section>
  );
};

export default Testimonies;