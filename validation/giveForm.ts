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
    fullName: z.string(),
    email: z.string().email({message: "An email is required"}),
    amount: z.string().transform((amount) => Number(amount)),
    currency: z.enum(currencies, {
        errorMap: () => ({message: "Please select a currency"})
    })
})