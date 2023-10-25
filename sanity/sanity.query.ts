import { groq } from "next-sanity";
import client from './sanity.client'

export async function getTestimonies(){
    return client.fetch(
        groq`*[_type == 'testimonies']{
            _id,
            name,
            content
        }`

    )
}