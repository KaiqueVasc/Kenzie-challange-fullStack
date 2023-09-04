import {z} from 'zod'
import { contactSchema, contactSchemaRequest, contactSchemaResponse, contactSchemaUpdate } from '../schemas/contact.schemas'
import { DeepPartial} from "typeorm"
import { contactSchemsResponseList } from '../schemas/contact.schemas'

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactResponse = z.infer<typeof contactSchemaResponse>
type TContactResponseList = z.infer<typeof contactSchemsResponseList>
type TContactUpdate = DeepPartial<TContactRequest>

export {
    TContact,
    TContactRequest,
    TContactResponse,
    TContactUpdate,
    TContactResponseList
}