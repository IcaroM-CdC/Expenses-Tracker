import { Request, Response } from "express"
import { CreateExpenseService } from "../services/createExpenseService"
import { DeleteExpenseService } from "../services/deleteExpenseService"

export class ExpenseController {

    async insertExpense(request: Request, response: Response){

        const { value, ownerId, day, year, month } = request.body;
        const createExpenseService = new CreateExpenseService()
        const expense = await createExpenseService.execute({value, ownerId, day, year, month})

        return response.status(200).json({
            message: "success",
            data: expense
        })
    }

    async deleteExpense( request: Request, response: Response){

        const { id } = request.body
        const deleteExpenseService = new DeleteExpenseService()
        const deletedExpense = await deleteExpenseService.execute({ id })

        return response.status(200).json({
            message: "Success",
            data: deletedExpense,
        })

    }
}