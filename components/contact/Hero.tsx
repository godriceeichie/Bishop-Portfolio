import React from "react";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <section className=" relative bg-[#0047B0]">
      <div className="relative h-full">
        <header className="h-1/2 px-8 py-12 flex flex-col gap-2 justify-center items-center">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold text-white">
            Want to Contact{" "}
            <span className="text-[#EEE8A9]">Bishop Yomi Isijola?</span>
          </h1>
          <p className="text-[#A8AABC] w-2/3 lg:w-4/12 text-center">
            You can reach the Office of Bishop Yomi Isijola with the details
            provided on this page.
          </p>
        </header>
        <ContactForm />
      </div>
      <div className="custom-shape-divider-bottom-1698059857">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
