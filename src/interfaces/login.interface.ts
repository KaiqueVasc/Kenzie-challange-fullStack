import {z} from 'zod'
import { loginSchema } from '../schemas/login.schema'

type TLogin = z.infer<typeof loginSchema>

export {
    TLogin
}