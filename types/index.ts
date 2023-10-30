
import { PortableTextBlock } from "sanity"

export type TestimoniesType = {
    _id: string,
    name: string,
    content: string
}

export type BioType = {
    _id: string,
    fullBio: PortableTextBlock[]
}

export type ContactDetails = {
    _id: string,
    phoneNumber: string,
    email: string,
    location: string,
    socialLinks: string[]
}