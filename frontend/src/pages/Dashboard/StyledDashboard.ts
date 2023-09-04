import styled from "styled-components";

 export const MainDashboard = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #363636;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

 export const Header = styled.div`
   height: 100px;
   width: 700px;
   display: flex;
   justify-content: space-between;
   padding: 0px 15px 0px 15px ;
   align-items: center;
   margin-top: 70px;
   border-radius: 45px;
   background-color: #228B22;
   border-color: #228B22;
`

 export const TittleDash = styled.h1`
   font-size: 18px;
   font-weight: 400;
   color: white;

`

 export const AddButton = styled.button`
   background-color: white;
   border-color: white;
   border-radius: 100px;
   align-items: center;
   justify-content: center;
`

export const ContactsList = styled.ul`
  background-color: #228B22;
  height: 350px;
  width: 690px;
  list-style: none;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap:20px;
  padding: 15px;
  overflow: scroll;
`