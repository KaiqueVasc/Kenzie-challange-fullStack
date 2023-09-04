import { BoxForm, InputRegister, LabelRegister, LetfDivRegister, MainRegister, RegisterButton, RegisterForm, RightDivRegister, RigthContent } from "./styledRegister"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Registerschema, RegisterData } from "./validator"
import { useAuth } from "../../hooks/useAuth"
import { TUserData } from "../../schemas/user.schemas"

export const Register = () => {

    
    const {register, handleSubmit} = useForm<RegisterData>({
        resolver: zodResolver(Registerschema)
    })

    const { register: RegisterClient } = useAuth()

    const onSubmit = (data: TUserData) => {
        RegisterClient(data)
    }

    return (
        <MainRegister>
            <LetfDivRegister>
                <BoxForm>
                    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
                        <LabelRegister htmlFor="name" id="name" >Nome completo</LabelRegister>
                        <InputRegister type="name" id="name" {...register("fullName")} />
                        <LabelRegister htmlFor="email" id="email" >Email</LabelRegister>
                        <InputRegister type="email" id="email" {...register("email")} />
                        <LabelRegister htmlFor="password" id="password" >Senha</LabelRegister>
                        <InputRegister type="password" id="password" {...register("password")}/>
                        <LabelRegister htmlFor="telephone" id="telephone" >Telefone</LabelRegister>
                        <InputRegister type="telephone" id="telephone" {...register("telephone")} />
                        <RegisterButton>Registrar</RegisterButton>
                    </RegisterForm>
                </BoxForm>
            </LetfDivRegister>
            <RightDivRegister>
                <RigthContent>Registre-se <p>agora</p> e aproveite o melhor de sua nova <p>agenda eletrônica.</p></RigthContent>
            </RightDivRegister>
        </MainRegister>
    )
}