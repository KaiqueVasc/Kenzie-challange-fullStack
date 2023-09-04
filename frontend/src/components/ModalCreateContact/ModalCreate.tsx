import { ReactNode, useEffect, useRef} from "react"
import { BackGroundModal } from "./GenericModal"


interface ModalProps{
    toggleModal: () => void
    children: ReactNode
    SectionClose?: boolean
}

export const GeneriModal = ({children,toggleModal, SectionClose}: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect (() => {
       const handleClick = (event: MouseEvent) => {
          if(!ref.current){
              return 
          }

          if(!event.target){
              return 
          }

          if(!ref.current.contains(event.target as HTMLElement)) {
               toggleModal()
          }
       }

       window.addEventListener("mousedown", handleClick)

       return () => {
        window.removeEventListener("mousedown", handleClick)
       }

    },[toggleModal])

   return (
      <BackGroundModal>
        <div ref={SectionClose ? null : ref}>
        {children}
        </div>
      </BackGroundModal>
   ) 
}