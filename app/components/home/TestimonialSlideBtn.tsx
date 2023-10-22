import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useSwiper } from "swiper/react";

const TestimonialSlideBtn = () => {
    const swiper = useSwiper()
  return <div className="w-full flex justify-between items-center p-1 absolute top-1/2 z-10 ]">
    <button onClick={() => swiper.slidePrev()}>
      <AiOutlineLeft size={45} className="text-primary-color"/>
    </button>
    <button onClick={() => swiper.slideNext()}>
      <AiOutlineRight size={45} className="text-primary-color"/>
    </button>
  </div>;
};

export default TestimonialSlideBtn;