import { Request, Response, NextFunction } from "express"
import { getRepository } from "typeorm"
import { User } from "../entities/users"

export async function AdminHandler (resquest: Request, response: Response, next: NextFunction){

    const { userId } = resquest

    const userRepository = getRepository(User)
    const user = await userRepository.findOne({ id: userId })
    const isAdmin = user?.isAdmin
    
    if (isAdmin){
        return next()
    }

    else {
        return response.status(401).json({
            error: "access unauthorized"
        })
    }

}