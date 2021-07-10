import { getRepository } from "typeorm"
import { Expense } from "../entities/expenses"

interface ExpenseRequest {
    id: string
}

export class DeleteExpenseService {

    async execute({ id }: ExpenseRequest){

        const expenseRepository = getRepository(Expense)

        const expenseExist = await expenseRepository.findOne({
            id: id
        })

        if (!expenseExist){
            throw new Error("Invalid expense")
        }

        const deleted = await expenseRepository.delete({
            id: id,
        })

        if (!deleted){
            throw new Error("An error occurred in the deletion")
        }

        return expenseExist
    }
}