import { Request, Response } from "express"
import { CreateProfitService } from "../services/createProfitService"
import { DeleteProfitService } from "../services/deleteProfitService"
import { ListProfitsService } from "../services/listProfitsService"

export class ProfitController {

    async insertProfit(request: Request, response: Response){

        const { value, ownerId, day, year, month } = request.body
        const createProfitService = new CreateProfitService()
        const profit = await createProfitService.execute({ value, day, month, year, ownerId })

        return response.status(200).json({
            message: "success",
            data: profit
        })

    }

    async deleteProfit(request: Request, response: Response){

        const { id } = request.body
        const deleteProfitService = new DeleteProfitService()
        const deletedExpense = await deleteProfitService.execute({ id})


        return response.status(200).json({
            message: "success",
            data: deletedExpense
        })
    }

    async listProfits(request: Request, response: Response){
        
        const userId = request.userId
        const listProfitsService = new ListProfitsService()
        const profitsData = await listProfitsService.execute({ userId })

        return response.status(200).json({
            profitsData: profitsData
        })

    }

}