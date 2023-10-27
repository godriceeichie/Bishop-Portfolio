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