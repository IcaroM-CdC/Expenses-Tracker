import { Request, Response } from "express"
import { CreateProfitService } from "../services/createProfitService"

export class ProfitController {

    async newLoan(request: Request, response: Response){

        const { value, ownerId, day, year, month } = request.body
        const createProfitService = new CreateProfitService()
        const loan = await createProfitService.execute({ value, day, month, year, ownerId })

        return response.status(200).json({
            message: "success",
            data: loan
        })

    }

}