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

        const totalExpensesValues = this.sumExpense(expenses)

        return {
            expensesList: expenses,
            totalExpensesValues: totalExpensesValues
        }

    }

    sumExpense(expense: Expense[]){

        var total = 0

        for (let index = 0; index < expense.length; index++) {
            total = total + expense[index].value
        }

        return total
    }
}