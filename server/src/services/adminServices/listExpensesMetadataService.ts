import { getRepository } from "typeorm"
import { Expense } from "../../entities/expenses"

export class ListExpensesMetadataService {

    async execute(){

        const expenseRepository = getRepository(Expense)
        const expenses = await expenseRepository.find()
        const expensesList: Array<object> = []

        expenses.forEach((expense) => {
            expensesList.push({
                value: expense.value,
                day: expense.day,
                month: expense.month,
                year: expense.year
            })
        })  

        return expensesList
    }
}