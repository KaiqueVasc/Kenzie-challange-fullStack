import {z} from 'zod'
import { contactSchemaResponse } from './contact.schemas'

const userSchema = z.object({
    id: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    password: z.string(),
    telephone: z.string(),
    registerDate: z.string()
})

const userSchemaRequest = userSchema.omit({
    id: true,
    registerDate:true
})

const userSchemaResponse = userSchema.omit({
    password:true
})

const listSpecifcUserSchema = userSchema.omit({
    password: true
}).extend({
    contacts: z.array(contactSchemaResponse)
})


const userSchemaUpdate = userSchemaRequest.partial()

export {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    listSpecifcUserSchema,
    userSchemaUpdate
}