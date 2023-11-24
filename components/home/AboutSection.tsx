"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bishopImg from "../../public/img/354347269_1770795243339613_7803894740863984802_n.jpg";
import { motion } from "framer-motion";
import CTABtn from "../CTABtn";
import { ShortBioType } from "@/types";
import { getShortBio } from "@/sanity/sanity.query";

const AboutSection = () => {
  const [data, setData] = useState<ShortBioType[]>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getShortBio();
      setData(result);
      setIsLoading(false);
      console.log(result)
    };
    fetchData();
  }, []);
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

            <div className="p-8 sm:p-16 lg:p-24 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl text-[#001D78]">
                  Bishop Yomi Isijola
                </h2>
                {isLoading && (
                  <div className="w-full max-w-2xl mx-auto flex flex-col gap-y-2">
                    <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
                    <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
                    <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
                    <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
                    <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
                  </div>
                )}

                
                {
                  data && 
                  data?.map(({ _id, shortBio }) => {
                    return (<p className="mt-4 text-gray-500" key={_id}>
                      {shortBio}
                    </p>);
                  })
                  
                }
              </div>

              <div>
                <CTABtn buttonName="About Me" link={"about"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
