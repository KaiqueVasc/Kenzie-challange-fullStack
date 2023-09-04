import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { api } from "../../services/api"
import { BoxCard, DeleteButton, DivButtons, InfoContact, UpdateButton } from "./StyledCard"
import { TContactUpdateRequest } from "../../schemas/contacts.shcemas"
import { AddButton } from "../../pages/Dashboard/StyledDashboard"
import { useAuth } from "../../hooks/useAuth"

interface CardProps {
    contact: Contact
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

export const CardContact = ({contact,setContacts}: CardProps) => {

    const { deleteContact} = useAuth()

    const updateStatus = async (data: TContactUpdateRequest, contactId: string) => {
        const response = await api.patch(`/contacts/${contact.id}`, data ).then(() => {
           const updateData = contacts
        })

        setContacts((previusTasks) =>
            previusTasks.map(previusTask =>
                contact.id === previusTask.id ? response.data : previusTask))
            }
            
    const contactId = Number(contact.id)

    return (
        <BoxCard>
            <InfoContact>Nome : {contact.fullName}</InfoContact>
            <InfoContact>Email : {contact.email}</InfoContact>
            <InfoContact>Fone : {contact.telephone}</InfoContact>
            <DivButtons>
            <DeleteButton onClick={() => deleteContact(contactId)} >Excluir</DeleteButton>
            <UpdateButton>Atualizar</UpdateButton>
            </DivButtons>
        </BoxCard>
    )
}