import { getRepository } from "typeorm"
import { Expense } from "../entities/expenses"
import { User } from "../entities/users"

interface ExpenseRequest {
    value: number
    day: number
    month: number
    year: number
    ownerId: string
}

export class CreateExpenseService{

    async execute({ value, day, month, year, ownerId }: ExpenseRequest){

        const expenseRepository = getRepository(Expense)
        const userRepository = getRepository(User)

        if (!value){
            throw new Error("valor ausente")
        }

        if (!ownerId){
            throw new Error("usuário inexistente")
        }

        if (!day || !month || !year){
            const date = Date.now()
            console.log(date)
            throw new Error("data incorreta")
        }

        const ownerExists = await userRepository.findOne({
            id: ownerId
        })

        if (!ownerExists){
            throw new Error("usuário inexistente")
        }

        const expense = expenseRepository.create({
            value: value,
            ownerId: ownerId,
            day: day,
            month: month,
            year: year
        })

        await expenseRepository.save(expense)

        return expense

    }
}