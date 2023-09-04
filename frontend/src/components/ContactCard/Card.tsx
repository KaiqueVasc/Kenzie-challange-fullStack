import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { api } from "../../services/api"
import { BoxCard, DeleteButton, DivButtons, InfoContact, UpdateButton } from "./StyledCard"
import { AddButton } from "../../pages/Dashboard/StyledDashboard"
import { useAuth } from "../../hooks/useAuth"

interface CardProps {
    contact: Contact
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

export const CardContact = ({contact,setContacts}: CardProps) => {

    const { deleteContact} = useAuth()

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