import { getRepository } from "typeorm"
import { Profit } from "../entities/profits"

interface ProfitRequest {
    userId: string
}

export class ListProfitsService {

    async execute ({ userId }: ProfitRequest){

        const profitRepository = getRepository(Profit)

        if (!userId){
            throw new Error("Invaid user")
        }

        const profits = await profitRepository.find({
            ownerId: userId
        })

        return profits;
    }

}