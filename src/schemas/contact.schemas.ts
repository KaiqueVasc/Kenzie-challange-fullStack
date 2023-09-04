import {z} from 'zod'

const contactSchema = z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string().email(),
    telephone: z.string(),
    registerDate: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id:true,
    registerDate:true
})

const contactSchemaResponse = contactSchema

const contactSchemsResponseList = z.array(contactSchema)

const contactSchemaUpdate = contactSchema.partial()

export {
    contactSchema,
    contactSchemaRequest,
    contactSchemaResponse,
    contactSchemaUpdate,
    contactSchemsResponseList
}