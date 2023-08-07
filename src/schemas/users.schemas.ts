import {z} from 'zod'

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

export {
    userSchema,
    userSchemaRequest,
    userSchemaResponse
}