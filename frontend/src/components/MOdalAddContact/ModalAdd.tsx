import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import {useForm} from "react-hook-form"
import { AddContactSchema, ContactData } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { GeneriModal } from "../ModalCreateContact/ModalCreate"
import { LabelAddContact, InputAddContact, AddButton, AddForm } from "./ModalAddStyled"
import { TContact } from "../../schemas/contacts.shcemas"
import { api } from "../../services/api"


interface ModalAddContactProps {
    toggleModal: () => void
    setContact: Dispatch<React.SetStateAction<Contact[]>>
}

export const ModalAddContact = ({toggleModal,setContact}:ModalAddContactProps) => {
    const { register , handleSubmit} = useForm<ContactData>({
        resolver: zodResolver(AddContactSchema)
    })

    const createContact = async (data: TContact) => {
        const response =  await api.post<Contact>("contact", data)
        
        setContact(previousContact => [response.data, ...previousContact])
        toggleModal()
    }

    return (
        <>
        <GeneriModal toggleModal={toggleModal}>
            <AddForm onSubmit={handleSubmit(createContact)}>
            <LabelAddContact htmlFor="fullName" id="fullName">Full Name</LabelAddContact>
                <InputAddContact type="fullName" id="fullName" {...register("fullName")}/>
            <LabelAddContact htmlFor="email" id="email">Email</LabelAddContact>
                <InputAddContact type="email" id="email" {...register("email")}/>
            <LabelAddContact htmlFor="telephone" id="telephone">Telephone</LabelAddContact>
                <InputAddContact type="telephone" id="telephone" {...register("telephone")}/>  
                <AddButton type="submit" >Cadastrar</AddButton>  
            </AddForm>
        </GeneriModal>
        </>
    )
}