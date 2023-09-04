import { z } from "zod";

export const contactSchemaResponse = z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string().email(),
    telephone: z.string(),
    registerDate: z.string()
})

export const contactSchemaRequestUpdate = z.object({
    fullName: z.string(),
    email: z.string().email(),
    telephone: z.string()
})

export const contactSchema = contactSchemaResponse.omit({
    id: true,
    registerDate: true
})

export type TContactResponse = z.infer<typeof contactSchemaResponse>
export type TContact = z.infer<typeof contactSchema>
export type TContactUpdateRequest = z.infer< typeof contactSchemaRequestUpdate>