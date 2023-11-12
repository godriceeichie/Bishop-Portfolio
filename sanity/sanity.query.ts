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

export async function getShortBio(){
    return client.fetch(
        groq`*[_type == 'profile']{
            _id,
            shortBio
        }`
    )
}

export async function getBio(){
    return client.fetch(
        groq`*[_type == 'profile']{
            _id,
            fullBio
        }`
    )
}

export async function getContactDetails(){
    return client.fetch(
        groq`*[_type == 'profile']{
            _id,
            phoneNumber,
            email,
            location,
            socialLinks
        }`
    )
}