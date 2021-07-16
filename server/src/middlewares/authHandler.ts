import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import { privateKey } from "../services/AuthUserService"

interface Payload {
    sub: string
}

export function AuthHandler( request: Request, response: Response, next: NextFunction){

    const authToken = request.headers.authorization

    if (!authToken){
        throw new Error("unknow token")
    }

    const [word, token] = authToken.split(" ")

    try {
    
        const verified = verify(token, privateKey) as Payload
        request.userId = verified.sub
    
    } catch (error) {
        return response.status(401).json({ message: "access unauthorized" })
    }

    return next()
}