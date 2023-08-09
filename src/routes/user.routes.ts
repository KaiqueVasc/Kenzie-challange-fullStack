import { Router } from "express";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/users.controller";
import { listContactController } from "../controllers/contact.controller";


const userRoutes: Router = Router()

userRoutes.post("", createUserController)
userRoutes.get("",listUserController)
userRoutes.patch('/:id',updateUserController)
userRoutes.delete('/:id',deleteUserController)


export { userRoutes}