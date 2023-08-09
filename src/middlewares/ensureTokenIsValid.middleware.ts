import {Request , Response, NextFunction} from 'express'
import { AppError } from '../errors'
import jwt from 'jsonwebtoken'

const ensureTokenIsValid = async( request: Request, response:Response, next: NextFunction): Promise<void> => {
    let token = request.headers.authorization

    if(!token){
        throw new AppError('Missing beare token', 401)
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!,(error, decoded:any) => {

        if(error){
            throw new AppError(error.message,401)
        }

        response.locals.user = {
            emial: decoded.email,
            id: Number(decoded.sub)
        }

        next()
    })
}

export { ensureTokenIsValid}