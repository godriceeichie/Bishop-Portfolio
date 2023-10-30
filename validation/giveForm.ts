import { z } from 'zod'

export const currencies = [
    "USD",
    "NGN",
    "EUR",
    "GBP"
] as const

export type Currency = typeof currencies[number]

export const mappedCurrencies: { [key in Currency]: string} = {
    USD: "United States Dollars (USD)",
    NGN: "Nigerian Naira (NGN)",
    EUR: "European Euro (EUR)",
    GBP: "Great Britain Pounds (GBP)"
}
export const giveForm = z.object({
    fullName: z.string().min(2, {message: "Full name must contain at least 2 characters"}),
    amount: z.string().min(1, {message: "An amount is required"}).transform((amount) => Number(amount)),
    currency: z.enum(currencies, {
        errorMap: () => ({message: "Please select a currency"})
    }),
    email: z.string().email({message: "An email is required"}),
    additionalInfo: z.string().optional()
})