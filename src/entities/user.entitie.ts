import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, BeforeUpdate, OneToMany} from "typeorm"
import {getRounds, hashSync} from 'bcryptjs'
import { Contact } from "./contact.entitie"

@Entity("users")
 class User {
    
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length: 100})
    fullName:string

    @Column({length:80, unique: true})
    email:string

    @Column({length: 100})
    password: string

    @Column({length:11})
    telephone:string

    @CreateDateColumn({type:"date"})
    registerDate: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isHashed = getRounds(this.password)
        if(!isHashed){
            this.password = hashSync(this.password,10)
        }
    }

    @OneToMany(()=> Contact, contacts => contacts.user)
    contacts: Contact[]
}

export { User }