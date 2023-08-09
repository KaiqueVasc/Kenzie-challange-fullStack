import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User } from "./user.entitie"

@Entity("contact")
 class Contact {
    @PrimaryGeneratedColumn()
     id: number 

    @Column({length:150})
     fullName: string

    @Column({length:80})
     email: string
     
    @Column({length:11})
     telephone: string
    
    @CreateDateColumn({type:"date"})
     registerDate: string
     
     @ManyToOne(()=> User , user => user.contacts, {onDelete: 'CASCADE'})
      user: User
 }

 export { Contact}