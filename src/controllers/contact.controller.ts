import {Request, Response} from 'express'
import { TContactRequest, TContactResponse, TContactUpdate } from '../interfaces/contact.interfaces'
import { createContactService, deleteContactService, listContactService, updateContactService } from '../services/contact/contact.service'

const createContactController = async ( request:Request, response: Response): Promise<Response> => {
    const userId = response.locals.user.id
    const contactData: TContactRequest = request.body

    const contact: TContactResponse = await createContactService(userId,contactData)

    return response.status(200).json(contact)
}

const listContactController = async(request:Request, response: Response): Promise<Response> => {
    const userId = response.locals.user.id
    const contactId = request.params.id

    const contact: TContactResponse =await listContactService(userId, contactId)

    return response.status(200).json(contact)
}

const updateContactController = async(request:Request, response:Response): Promise<Response> => {
    const userId = response.locals.user.id
    const contactId = parseInt(request.params.id)
    const updateData = request.body

    const contact: TContactResponse = await updateContactService(contactId, updateData,userId)

    return response.status(200).json(contact)
}

const deleteContactController = async(request:Request, response:Response): Promise<Response> => {
    const userId = response.locals.user.id
    const contactId = parseInt(request.params.id)

    await deleteContactService(userId,contactId)

    return response.status(204).send()
}

export {
    createContactController,
    listContactController,
    updateContactController,
    deleteContactController
}