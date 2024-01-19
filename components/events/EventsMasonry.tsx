"use client";
import { getEvents, getSearchEvents } from "@/sanity/sanity.query";
import { EventType } from "@/types";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Masonry from "react-masonry-css";

const EventsMasonry = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventType[]>();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    const eventsArr: EventType[] = await getEvents();

    // Sort events based on the date in descending order (latest first)
    eventsArr.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
    setEvents(eventsArr);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setEvents(
        events?.filter((event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    else{
      fetchData()
    }
  }, [searchTerm]);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const isEventExpired = (eventDate: string): boolean => {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);

    // Compare the event date with the current date
    return eventDateTime < currentDate;
  };
  return (
    <section className="py-9 px-5 lg:px-10">
      <div className="relative mb-8 shadow-md">
        <input
          type="text"
          className="w-full focus-visible:outline-0 px-5 py-3"
          name=""
          id=""
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className="absolute end-5 top-1/2 -translate-y-1/2">
          <AiOutlineSearch size={"1.25em"} />
        </button>
      </div>

      {isLoading && (
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {[1, 2, 3, 4, 5, 6].map((element) => {
            return (
              <Box padding="6" boxShadow={"lg"} bg="white" key={element}>
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
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {events?.map(({ _id, name, tagline, coverImage, date, slug }) => {
            const expired = isEventExpired(date);
            return (
              <Link
                href={`events/${slug}`}
                key={_id}
                className="block hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
              >
                <Image
                  src={coverImage.image}
                  alt={tagline}
                  objectFit="contain"
                  height={0}
                  width={0}
                  unoptimized={true}
                  className="w-full rounded-t-xl"
                />
                <div className="rounded-b-[10px] bg-white p-4 !pt-6 sm:p-6">
                  <time dateTime={date} className="block text-xs text-gray-500">
                    {" "}
                    {date.toString()}{" "}
                  </time>

                  
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {/* How to center an element using JavaScript and jQuery */}
                      {name}
                    </h3>
                  

                  <div className="mt-4 ">{tagline}</div>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {expired ? (
                      <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-600">
                        Expired
                      </span>
                    ) : (
                      <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                        Upcoming
                      </span>
                    )}
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
