import { AppDataSource } from "../../data-source";
import { Repository} from 'typeorm'
import { User } from "../../entities/user.entitie";
import { TUser, TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors";
import { listSpecifcUserSchema, userSchemaResponse } from "../../schemas/users.schemas";

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

const listUserService = async (userId:any): Promise<TUserResponse> => {
      const userRepository = AppDataSource.getRepository(User)

      const user: User | null = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: ['contacts']
      })

      if(!user){
        throw new AppError('User not found', 404)
      }

      const findUser = listSpecifcUserSchema.parse(user)

      return findUser


}

const updateUserService = async (userData:any, userId:string): Promise<TUserResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const oldUserData: User | null = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if(!oldUserData){
        throw new AppError("User not found", 404)
    }

    const newUserData = userRepository.create({
        ...oldUserData,
        ...userData
    })

    await userRepository.save(newUserData)

    const returnUser = userSchemaResponse.parse(newUserData)

    return returnUser
} 

const deleteUserService = async ( userId: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    await userRepository.softRemove(user!)
}
export {
    createUserService,
    updateUserService, 
    deleteUserService,
    listUserService
}