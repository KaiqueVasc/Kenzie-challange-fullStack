import { AppDataSource } from "../../data-source";
import { Repository} from 'typeorm'
import { User } from "../../entities/user.entitie";
import { TUser, TUserList, TUserRequest, TUserResponse, TuserResponseList } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors";
import { listSpecifcUserSchema, userSchema, userSchemaResponse } from "../../schemas/users.schemas";

const createUserService = async ( data: TUserRequest): Promise<TUser> => {
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

const listUserService = async (): Promise<TUser> => {
      const userRepository = AppDataSource.getRepository(User)

      const users = await userRepository.find()
    
      const clientReturn = listSpecifcUserSchema.parse(users)

      return clientReturn
}

const updateUserService = async (userData:any, userId:string): Promise<TUser> => {
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