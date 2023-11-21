import z from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

export const contactFormSchema = z.object({
    name: z.string().min(2, {message: "Name must not be less than 2 characters"}),
    email: z.string().email(),
    phoneNumber: z.string().regex(phoneRegex, "Invalid phone number!"),
    subject: z.string(),
    message: z.string().min(6, {message: "Message must be more than 6 characters"})
})