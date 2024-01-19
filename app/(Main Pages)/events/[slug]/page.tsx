import { getEvents, getSingleEvent } from "@/sanity/sanity.query";
import { EventType } from "@/types";
import { PortableText } from "@portabletext/react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
  // searchParams: { [key: string]: string | string[] | undefined };
};


export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug;
  const event: EventType = await getSingleEvent(slug);

  if (!event) {
    return { title: "Event not found" };
  }
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

export async function generateStaticParams() {
  const events: EventType[] = await getEvents();

  if (!events) return [];
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function Event({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const event: EventType = await getSingleEvent(slug);
  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8 my-6">
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
          className="w-full h-96 rounded-xl border border-zinc-800"
          width={0}
          height={0}
          src={event.coverImage?.image}
          alt={event.coverImage?.alt || event.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-lg text-zinc-400">
          <PortableText value={event.description} />
        </div>
      </div>
    </main>
  );
}
