import { User } from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const loginTokenService = async (loginData:any): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: loginData.email
    })

    if (!user){
        throw new AppError('invalid credentials', 401)
    }

    const matchPassword = await compare(loginData.password, user.password)

    if(!matchPassword){
        throw new AppError('Invalid credentials', 401)
    }

    const token = jwt.sign(
        {
            email: user.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(user.id)
        }
    )

    return token
}

export {loginTokenService}