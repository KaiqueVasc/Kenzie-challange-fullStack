import { ReactNode,createContext,useEffect,useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TContactResponse } from "../schemas/contacts.shcemas";
import { RegisterData } from "../pages/Register/validator";
import { Contact } from "../pages/Dashboard";

interface AuthProviderProps {
    children: ReactNode
}

interface LoginResponse {
    token: string
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    loading: boolean
    register: (UserData: RegisterData) => void
    deleteContact: (contactId: number) => void 
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [loading, setLoading] = useState(true)
    const [contacts, setContacts] = useState<TContactResponse[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("userToken:token")

        if(!token){
            setLoading(false)
            return
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)
    }, [])

    const signIn = async (data: LoginData) => {

        try{
            const response = await api.post<LoginResponse>("/login", data)

            const {token} = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("userToken:token", token)
            setLoading(false)

            navigate("dashboard")
        }
        catch(error){
            console.log(error)
        }
    }

    const register = (UserData: RegisterData) => {
        api.post("/users", UserData).then(() => {
            toast("Usuario registrado com sucesso!!", { type: "success"})
            navigate("/dashboard")
        }).catch((err: any) => {
             console.error(err)
             toast("Erro ao registrar o usuario", { type: "error"})
        })
    }

    const deleteContact = (id: number)=> {
           return api.delete(`/contact/${id}`).then((response) => {
            console.log(id)
            if ( response.status === 204){
                toast("Contato excluido com sucesso", {type: "success"})
                setContacts(contacts.filter((contact) => contact.id !== id))

                return response.data
            }else{
                return null
            }
        }).catch((err: any) => {
            console.log(err)
            toast("Não foi possivel deletar o contato", {type: "error"})
        })
    }

    return (
        <AuthContext.Provider value={{signIn, loading, register , deleteContact}}>
            {children}
            </AuthContext.Provider>
    )
}