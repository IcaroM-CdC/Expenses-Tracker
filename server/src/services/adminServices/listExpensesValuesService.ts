import { getRepository } from "typeorm"
import { Expense } from "../../entities/expenses"

export class ListExpensesValuesService {

    async execute(){

        const expenseRepository = getRepository(Expense)
        const expenses = await expenseRepository.find()
        const expensesList: Array<number> = []

        expenses.forEach((expense) => {
            expensesList.push(expense.value)
        })  

        return expensesList
    }
}