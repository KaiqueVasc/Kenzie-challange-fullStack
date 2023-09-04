import { useForm } from "react-hook-form"
import {  MainLogin,LetfDiv,LeftContent,RightDiv,BoxForm, LoginForm,LabelLogin, InputLogin, LoginButton } from "./styledLogin"
import { LoginData, Loginschema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"


export const Login = () => {

    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(Loginschema)
    })

    const {signIn} = useAuth()

    return (
        <MainLogin>
          <LetfDiv>
             <LeftContent>Adicione seus <p>principais</p> contatos em sua nova e <p>prática</p> agenda virtual</LeftContent>
            </LetfDiv>
           <RightDiv>
             <BoxForm>
                <LoginForm onSubmit={handleSubmit(signIn)}>
                    <LabelLogin htmlFor="email" id="email">Email</LabelLogin>
                    <InputLogin type="email" id="email" {...register("email")}/>
                    <LabelLogin htmlFor="password" id="password" >Senha</LabelLogin>
                    <InputLogin type="password" id="password" {...register("password")}/>
                    <LoginButton type="submit">Entrar</LoginButton>
                </LoginForm>
             </BoxForm>
            </RightDiv>   
        </MainLogin>
    )
}