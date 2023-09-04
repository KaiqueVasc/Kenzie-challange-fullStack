import { Router } from "express";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contact.controller";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

const contactRoutes: Router = Router()

contactRoutes.post('', ensureTokenIsValid , createContactController)
contactRoutes.get('',ensureTokenIsValid,listContactController)
contactRoutes.patch('/:id', ensureTokenIsValid,updateContactController)
contactRoutes.delete('/:id', deleteContactController)

export { contactRoutes}