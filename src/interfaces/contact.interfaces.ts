import {z} from 'zod'
import { contactSchema, contactSchemaRequest, contactSchemaResponse, contactSchemaUpdate } from '../schemas/contact.schemas'
import { DeepPartial} from "typeorm"

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactResponse = z.infer<typeof contactSchemaResponse>
type TContactUpdate = DeepPartial<TContactRequest>

export {
    TContact,
    TContactRequest,
    TContactResponse,
    TContactUpdate
}