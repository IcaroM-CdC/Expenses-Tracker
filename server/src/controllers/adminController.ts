import { Request, Response } from "express"
import { ListUsersService } from "../services/listUsersService"
import { ListProfitsMetadataService } from "../services/adminServices/listProfitsMetadataService" 
import { ListExpensesMetadataService } from "../services/adminServices/listExpensesMetadataService"

export class AdminController {

    async listUsers(request: Request, response: Response){

        const listUsersService = new ListUsersService()
        const userList = await listUsersService.execute()
        
        return response.status(200).json({
            message: "Success",
            data: userList
        })
    }

    async listProfitsMetadata(request: Request, response: Response){

        const listProfitsMetadataService = new ListProfitsMetadataService()
        const profitMetadataList = await listProfitsMetadataService.execute()
       
        return response.status(200).json({
            message: "Success",
            data: profitMetadataList
        })
    }

    async listExpensesMetadata(request: Request, response: Response){

        const listExpensesMetadataService = new ListExpensesMetadataService()
        const expenseMetadataList = await listExpensesMetadataService.execute()

        return response.status(200).json({
            message: "Success",
            data: expenseMetadataList
        })
    }
}