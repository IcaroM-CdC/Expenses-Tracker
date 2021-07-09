import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./users"

@Entity("expenses")
export class Expense {

    @PrimaryColumn()
    readonly id: string

    @Column()
    value: number

    @Column()
    day: number

    @Column()
    month: number

    @Column()
    year: number

    @Column()
    ownerId: string
    @JoinColumn({name: "ownerId"})
    @ManyToOne(() => User)
    ownerID: User

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }

}