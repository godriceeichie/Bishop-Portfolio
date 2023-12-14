import { getEvents, getSingleEvent } from "@/sanity/sanity.query";
import { EventType } from "@/types";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(){
    const events: EventType[] = await getEvents()
    return events.map((event) => ({
      slug: event.slug
    }))
}

export async function generateMetaData({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event: EventType = await getSingleEvent(slug);
  return {
    title: `${event.name} | Event`,
    description: event.tagline,
    openGraph: {
      images: event.coverImage?.image,
      title: event.name,
      description: event.tagline,
    },
  };
}



export default async function Event({ params }:  Props){
  const { slug } = params;
  const event: EventType = await getSingleEvent(slug);
  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-3xl text-xl lg:leading-tight mb-4">
            {event.name}
          </h1>

          <span className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2">
            {event.date.toString()}
          </span>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={event.coverImage?.image}
          alt={event.coverImage?.alt || event.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={event.description} />
        </div>
      </div>
    </main>
  );
};



