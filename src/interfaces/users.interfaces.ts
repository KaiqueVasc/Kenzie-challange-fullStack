import {z} from 'zod'
import { userSchema, userSchemaRequest, userSchemaResponse } from '../schemas/users.schemas'
import { User } from '../entities/user.entitie'
import { DeepPartial, TypeORMError } from 'typeorm'

type TUserList = Array<typeof userSchemaResponse>
type TUser = z.infer<typeof userSchemaResponse>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = DeepPartial<TUserList>
type TuserResponseList = z.infer<typeof userSchemaResponse>

export {
    TUser,
    TUserRequest,
    TUserResponse,
    TuserResponseList,
    TUserList
}