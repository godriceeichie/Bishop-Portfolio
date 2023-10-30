
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

export type ContactInputs = {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
};
export type GiveInputs = {
    fullName: string,
    amount: string,
    currency: String | React.Key,
    email: string,
    message: string,
};

