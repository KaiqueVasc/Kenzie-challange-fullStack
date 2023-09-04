import styled from "styled-components";

export const MainLogin = styled.main`
  display: flex;
  flex-direction: row;
  width: 1500px;
`

export const LetfDiv = styled.div`
   height: 100vh;
   width: 80vw;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   background-color: #363636;
`

export const LeftContent = styled.h1`
  font-size: 40px;
  font-weight: 200;
  width: 400px;
  padding: 20px 50px;

  p{
    font-size: 40px;
    font-weight: 600;
    color: #228B22
  }
`

export const RightDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #228B22;
`

export const BoxForm = styled.section`
    height: 300px;
    width: 500px;
    display: flex;
    justify-content: center;
    padding: 0px 0px 0px 20px;
    align-items: center;
    background-color: #363636;
    border-radius: 10px;
    margin-left: 100px;
`

export const LoginForm = styled.form`
   height: 300px;
   width: 500px;
   display: flex;
   gap: 15px;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   border-radius: 10px;
   background-color: #363636;
`

export const LabelLogin = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #228B22;
`

export const InputLogin = styled.input`
   height: 40px;
   width: 460px;
   background-color: #363636;
   border-color: #228B22;
   border-radius: 10px;
`

export const LoginButton = styled.button`
   height: 50px;
   width: 350px;
   background-color: #228B22;
   color: white;
   border-radius: 5px;
   align-self: center;
`



