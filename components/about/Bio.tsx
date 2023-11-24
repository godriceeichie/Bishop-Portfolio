"use client";
import { getBio } from "@/sanity/sanity.query";
import { BioType } from "@/types";
import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

const Bio = () => {
  const [data, setData] = useState<BioType[]>();
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await getBio();
      setData(result);
      setIsLoading(false)
    };
    fetchData();
  }, []);
  return (
    <div className="px-5 py-10">
      {
        isLoading && <div className="w-full max-w-2xl mx-auto flex flex-col gap-y-2">
        <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
        <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
        <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
        <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
        <span className="w-full h-6 bg-zinc-400 rounded-sm animate-pulse"></span>
        
      </div>
      }
      {data &&
        <p className="w-full max-w-2xl mx-auto flex flex-col gap-y-3 text-zinc-500 leading-relaxed">
          {data?.map(({ _id, fullBio }) => {
            return <PortableText value={fullBio} key={_id}/>;
          })}
      </p>
      }
      
      
    </div>
  );
};

export default Bio;
