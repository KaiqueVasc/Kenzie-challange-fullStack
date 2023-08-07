import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUser, TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";

const createUserService = async ( data: TUserRequest): Promise<TUserResponse> => {
    const {fullName,email,password,telephone} = data
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if(findUser){
        throw new Error("User already exsits")
    }

    const user = userRepository.create({
        fullName,
        email,
        password,
        telephone
    })

    await userRepository.save(user)

    return user
}

export {
    createUserService
}