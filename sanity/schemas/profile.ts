import {BiUser } from 'react-icons/bi'
import { defineField } from 'sanity'

export const profile = {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    icon: BiUser,
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        {
            name: "email",
            title: "Email Address",
            type: "string"
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string"
        },
        {
            name: "location",
            title: "Location",
            type: "string"
        },
        {
            name: 'shortBio',
            title: 'Short Bio',
            type: "text"
        },
        {
            name: "fullBio",
            title: "Full Bio",
            type: "array",
            of: [{type: 'block'}]
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: "object",
            descripton: "Add your social media links:",
            fields: [
                {
                    name: "facebook",
                    title: "Facebook URL",
                    type: 'url',
                    initialValue: 'https://www.facebook.com/logos.pastor'
                },
                {
                    name: "instagram",
                    title: "Instagram URL",
                    type: 'url',
                    initialValue: 'https://www.instagram.com/officialbishopyomiisijola/'
                },
                {
                    name: "linkedin",
                    title: "LinkedIn URL",
                    type: 'url',
                    initialValue: 'https://www.linkedin.com/in/bishop-yomi-isijola-82870929'
                },
                {
                    name: "youtube",
                    title: "YouTube URL",
                    type: 'url',
                    initialValue: 'https://www.youtube.com/@logosministries321'
                },
                {
                    name: 'twitter',
                    title: "Twitter URL",
                    type: 'url',
                    initialValue: 'https://x.com/BIsijola?s=20'
                }

            ]
        },
        
    ]
}