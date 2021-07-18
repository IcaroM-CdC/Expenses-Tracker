import { Request, Response } from "express"
import { CreateUserService } from "../services/createUserService"
import { AuthUserService } from "../services/AuthUserService"
import { ListUsersService } from "../services/listUsersService"

export class UserController {

    async register(request: Request, response: Response){

        const { name, password, email, admin } = request.body
        const createUserService = new CreateUserService()
        const user = await createUserService.execute({ name, password, email, admin })
        
        return response.status(200).json({
            message: "success",
            data: user
        })
    }

    async login(request: Request, response: Response){

        const { email, password } = request.body
        const authUserService = new AuthUserService()
        const token = await authUserService.execute({ email, password })

        return response.status(201).json({
            message: "Success",
            data: token
        })
    }
}