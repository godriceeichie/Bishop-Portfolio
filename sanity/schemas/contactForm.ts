export const contactForm = {
    name: "contactForm",
    title: "Contact Form",
    type: "document",
    
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "email",
            title: "Email address",
            type: "string"
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string"
        },
        {
            name: "message",
            title: "Message",
            type: "array",
            of: [{type: "block"}]
        }
    ]
}