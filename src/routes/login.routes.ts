import { Router } from "express";
import { loginTokenController } from "../controllers/login.controller";

const loginRoute: Router = Router()

loginRoute.post('', loginTokenController)

export {loginRoute}