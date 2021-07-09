import { Request, Response } from "express"
import { CreateExpenseService } from "../services/createExpenseService"

export class ExpenseController {

    async newExpense(request: Request, response: Response){

        const { value, ownerId, day, year, month } = request.body;
        const expenseService = new CreateExpenseService()
        const expense = await expenseService.execute({value, ownerId, day, year, month})

        return response.status(200).json({
            message: "success",
            data: expense
        })

    }

}