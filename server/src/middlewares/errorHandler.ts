import { Request, Response, NextFunction } from 'express'

export function ErrorHandler(error: Error, request: Request, response: Response, next: NextFunction){
    
    if (error instanceof Error){
        return response.status(400).json({
            ERROR: error.message 
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Um erro interno ocorreu"
    })
}