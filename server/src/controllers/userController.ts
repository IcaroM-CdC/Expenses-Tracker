import { Request, Response } from "express"
import { CreateUserService } from "../services/createUserService"

export class UserController {

    async handle(request: Request, response: Response){

        const { name, password, email, admin } = request.body
        const createUserService = new CreateUserService()
        const user = await createUserService.execute({ name, password, email, admin })
        
        return response.status(200).json({
            message: "success",
            data: user
        })
    }
}