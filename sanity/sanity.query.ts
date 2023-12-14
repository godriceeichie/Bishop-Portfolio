import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getTestimonies() {
  return client.fetch(
    groq`*[_type == 'testimonies']{
            _id,
            name,
            content
        }`
  );
}

export async function getShortBio() {
  return client.fetch(
    groq`*[_type == 'profile']{
            _id,
            shortBio
        }`
  );
}

export async function getBio() {
  return client.fetch(
    groq`*[_type == 'profile']{
            _id,
            fullBio
        }`
  );
}

export async function getContactDetails() {
  return client.fetch(
    groq`*[_type == 'profile']{
            _id,
            phoneNumber,
            email,
            location,
            socialLinks
        }`
  );
}

export async function getGalleryImages() {
  return client.fetch(
    groq`*[_type == "gallery"] {
          _id,
          "images": images[]{
            alt,
            "image": asset->url
          }
        }`
  );
}

export async function getEvents() {
  return client.fetch(
    groq`*[_type == "event"]{
        _id, 
        name,
        "slug": slug.current,
        tagline,
        date,
        coverImage { alt, "image": asset->url },
      }`
  );
}

export async function getSingleEvent(slug: string) {
    return client.fetch(
      groq`*[_type == "event" && slug.current == $slug][0]{
        _id,
        name,
        coverImage { alt, "image": asset->url },
        tagline,
        description,
        date
      }`,
      { slug }
    );
  }
