import { Response, Request } from "express"
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces"
import { createUserService, deleteUserService, listUserService, updateUserService } from "../services/user/user.services"

const createUserController = async( req: Request , res: Response) => {
    const userData :TUserRequest = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)

}

const listUserController = async (request: Request, response: Response): Promise<Response> => {
    const userId = response.locals.id

    const foundedUser: TUserResponse = await listUserService(userId)

    return response.status(200).json(foundedUser)
}

const updateUserController = async (request: Request, response: Response): Promise<Response> => {
    const userData =  request.body
    const userId = request.params.id

    const newUserData =  await updateUserService(userData, userId)

    return response.json(newUserData)
}

const deleteUserController = async ( request:Request, response:Response): Promise<Response> => {
    const userId =  request.params.id

    await deleteUserService(userId)

    return response.status(204).send()
}
export {createUserController,
        updateUserController,
        deleteUserController,
        listUserController
    }