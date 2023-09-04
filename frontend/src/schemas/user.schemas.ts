import { z} from "zod"


 const clientSchema = z.object({
    id: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().max(120),
    telephone: z.string(),
    createdAt: z.string()
})

const clientSchemaRequest = clientSchema.omit({
    id:true,
    createdAt: true
})

const clientSchemaResponse = clientSchema.omit({
    password: true
})

const listClientSchemaResponse = clientSchema.omit({
    password:true
}).extend({
    contacts: z.array(clientSchemaResponse)
})

const clientSchemaUpdate = clientSchemaRequest.partial()

 export type TUserData = z.infer<typeof clientSchemaRequest>

export {
    clientSchema,
    clientSchemaRequest,
    clientSchemaResponse,
    listClientSchemaResponse,
    clientSchemaUpdate,
}