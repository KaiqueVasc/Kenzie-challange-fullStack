import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entitie"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors"
import { TContact, TContactRequest, TContactResponse, TContactUpdate } from "../../interfaces/contact.interfaces"
import { contactSchemaResponse } from "../../schemas/contact.schemas"

const createContactService = async ( userId: string , contactData:TContactRequest): Promise<TContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository =  AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError('User not found', 404)
    }

    const dataWithUser = {
        ...contactData,
        user: user 
    }
   
    const contact  = contactRepository.create(dataWithUser)

    await contactRepository.save(contact)

    const createdContact: TContactResponse = contactSchemaResponse.parse(contact)

    return createdContact

}

const listContactService = async (userId: string): Promise<TContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if(user){
        throw new AppError('User not found', 404)
    }
     
    const contacts = await contactRepository.find({
        where: {
            user: !user
        }
    })
    

    return contactSchemaResponse.parse(contacts)

}

const updateContactService = async (idContact: number, updateData: TContactUpdate): Promise<TContact> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact: Contact | null= await contactRepository.findOne({
        where: {
            id: idContact
        },
        relations: ['user']
    })

    if(!contact){
        throw new AppError('Contact not found', 404)
    }


    const updatedContact = contactRepository.create({
        ...contact,
        ...updateData
    })

    await contactRepository.save(updatedContact)

    return contactSchemaResponse.parse(updatedContact)
}

const deleteContactService = async (contactId: number): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: ['user']
    })

    if(!contact){
        throw new AppError('Contact not found', 404)
    }

    await contactRepository.remove(contact)
}

export {
    createContactService,
    listContactService,
    updateContactService,
    deleteContactService
}