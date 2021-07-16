import { getRepository } from "typeorm"
import { Expense } from "../entities/expenses"

interface ExpensesRequest {
    userId: string
}

export class ListExpensesService {

    async execute({ userId }: ExpensesRequest){

        const expenseRepository = getRepository(Expense)
        
        if (!userId){
            throw new Error("Invaid user")
        }

        const expenses = await expenseRepository.find({
            ownerId: userId
        })

        return expenses

    }

}