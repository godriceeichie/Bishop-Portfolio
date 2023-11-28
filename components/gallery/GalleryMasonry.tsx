"use client";
import { getGalleryImages } from "@/sanity/sanity.query";
import { GalleryData } from "@/types";
import { Skeleton } from "@chakra-ui/react";
import { truncate } from "fs/promises";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const GalleryMasonry = () => {
  const [galleryImg, setGalleryImg] = useState<GalleryData[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const gallery = await getGalleryImages();
      setGalleryImg(gallery[0].images);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <section className="p-4">
      {isLoading && (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return <Skeleton width={"500"} height={"400"} isLoaded={isLoading}></Skeleton>;
          })}
        </Masonry>
      )}
      {galleryImg && (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galleryImg?.map(({ alt, image }) => {
            return (
              <div key={image}>
                <Image
                  src={image}
                  alt={alt}
                  width={0}
                  height={0}
                  objectFit="cover"
                  className="w-full h-auto"
                />
              </div>
            );
          })}
        </Masonry>
      )}
    </section>
  );
};

export default GalleryMasonry;
