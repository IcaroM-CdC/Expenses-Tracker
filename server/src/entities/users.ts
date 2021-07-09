import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users")
export class User {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    isAdmin: boolean
    
    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }

}