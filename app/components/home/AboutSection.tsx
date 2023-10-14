'use client'
import Image from "next/image";
import React from "react";
import bishopImg from '../../../public/img/354347269_1770795243339613_7803894740863984802_n.jpg'
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <motion.div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="House"
                src={bishopImg}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Bishop Yomi Isijola
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              {/* <Link
                href="about"
                className="mt-8 inline-block rounded border border-[#DF3B5F] bg-accent-color hover:bg-white px-12 py-3 text-sm font-medium text-white hover:text-accent-color focus:outline-none focus:ring active:text-indigo-500"
              >
                Read More
              </Link> */}
              <Link href={'about'} className="btn2 mt-8 inline-block rounded px-8 py-3 relative bg-accent-color text-white font-medium tracking-wider leading-none overflow-hidden hover:border hover:border-accent-color hover:text-accent-color">
                <span className="absolute inset-0 bg-white"></span>
                <span className="absolute inset-0 flex justify-center items-center font-bold"> 
                    About Me
                </span>
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
