import { Response, Request } from "express"
import { TUserRequest } from "../interfaces/users.interfaces"
import { createUserService } from "../services/user/user.services"

const createUserController = async( req: Request , res: Response) => {
    const userData :TUserRequest = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)

}

export {createUserController}