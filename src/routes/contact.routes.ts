import { Router } from "express";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contact.controller";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

const contactRoutes: Router = Router()

contactRoutes.post('', createContactController)
contactRoutes.get('', listContactController)
contactRoutes.patch('/:id', updateContactController)
contactRoutes.delete('/:id', deleteContactController)

export { contactRoutes}