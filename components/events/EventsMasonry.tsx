"use client";
import { getEvents } from "@/sanity/sanity.query";
import { EventType } from "@/types";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const EventsMasonry = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventType[]>();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const eventsArr: EventType[] = await getEvents();
      setEvents(eventsArr);
      setIsLoading(false);
    };
    fetchData();
    console.log(events);
  }, []);
  return (
    <section className="p-5">
      {isLoading && (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <Box padding="6" boxShadow={'lg'} bg="white">
                <Skeleton height={"52"}></Skeleton>
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="4"
                />
              </Box>
            );
          })}
        </Masonry>
      )}
      {events && (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {events?.map(({ _id, name, tagline, coverImage, date, slug }) => {
            return (
              <Link
                href={`events/${slug}`}
                key={_id}
                className="block hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
              >
                <Image
                  src={coverImage.image}
                  alt={coverImage.alt!}
                  objectFit="cover"
                  height={0}
                  width={0}
                  unoptimized={true}
                  className="w-full h-56 rounded-t-xl"
                />
                <div className="rounded-b-[10px] bg-white p-4 !pt-6 sm:p-6">
                  <time dateTime={date} className="block text-xs text-gray-500">
                    {" "}
                    {date.toString()}{" "}
                  </time>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {/* How to center an element using JavaScript and jQuery */}
                      {name}
                    </h3>
                  </a>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {/* <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    Snippet
                  </span>

                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    JavaScript
                  </span> */}
                    {tagline}
                  </div>
                </div>
              </Link>
            );
          })}
        </Masonry>
      )}
    </section>
  );
};

export default EventsMasonry;
