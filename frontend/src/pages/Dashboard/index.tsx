import { useEffect,useState } from "react"
import { api } from "../../services/api"
import { AddButton, ContactsList, Header, MainDashboard, TittleDash } from "./StyledDashboard"
import { ModalAddContact } from "../../components/MOdalAddContact/ModalAdd"
import { CardContact } from "../../components/ContactCard/Card"
//import { useAuth } from "../../hooks/useAuth"

export interface Contact {
    id: string,
    fullName: string,
    email: string,
    telephone: string,
    registerDate: string
}

export const Dashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    //const {loading} = useAuth()

    

    useEffect(()=> {
        (async ()=> {
          const response =  await api.get<Contact[]>('/contact')

          setContacts(response.data)
        })()
    },[])

     const renderBoard = () => contacts.map(contact => <CardContact key={contact.id} contact={contact} setContacts={setContacts}/>)

     const toggleModal = () => setIsModalOpen(!isModalOpen)

    return (
        <>
        <MainDashboard>
            <Header>
                <TittleDash>Adicione um novo contato</TittleDash>
                <AddButton type="button"  onClick={toggleModal}>+</AddButton>
            </Header>
            {
                isModalOpen && <ModalAddContact setContact={setContacts} toggleModal={toggleModal} />
            }
            <ContactsList>{renderBoard()}</ContactsList>
        </MainDashboard>
        </>
    )
}