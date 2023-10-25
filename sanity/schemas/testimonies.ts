import { defineField } from "sanity";

export const testimonies = {
    name: 'testimonies',
    title: 'Testimonies',
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter your name"
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "text",
            description: "Enter your testimony"
        })
    ]
}