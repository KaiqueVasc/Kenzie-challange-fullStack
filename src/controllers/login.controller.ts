import {Request, Response} from 'express'
import { loginTokenService } from '../services/login/login.service'

const loginTokenController = async ( request: Request, response: Response): Promise<Response> => {
    const loginData = request.body

    const token = await loginTokenService(loginData)

    return response.json({token})
}

export {
     loginTokenController
}