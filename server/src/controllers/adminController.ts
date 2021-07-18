import { Request, Response } from "express"
import { ListUsersService } from "../services/listUsersService"
import { ListProfitsValuesService } from "../services/adminServices/listProfitsValuesService" 
import { ListExpensesValuesService } from "../services/adminServices/listExpensesValuesService"

export class AdminController {

    async listUsers(request: Request, response: Response){

        const listUsersService = new ListUsersService()
        const userList = await listUsersService.execute()
        
        return response.status(200).json({
            message: "Success",
            data: userList
        })
    }

    async listProfitsValues(request: Request, response: Response){

        const listProfitsValuesService = new ListProfitsValuesService()
        const profitValuesList = await listProfitsValuesService.execute()
       
        return response.status(200).json({
            message: "Success",
            data: profitValuesList
        })

    }

    async listExpensesValues(request: Request, response: Response){

        const listExpensesValuesService = new ListProfitsValuesService()
        const expenseValuesList = await listExpensesValuesService.execute()

        return response.status(200).json({
            message: "Success",
            data: expenseValuesList
        })

    }

}