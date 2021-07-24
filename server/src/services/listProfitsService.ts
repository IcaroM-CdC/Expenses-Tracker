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

        const totalProfitsValue = this.sumProfits(profits)

        return {
            profitsList: profits,
            totalProfitsValue: totalProfitsValue
        }
    }

    sumProfits(profit: Profit[]){

        var total = 0

        for (let index = 0; index < profit.length; index++) {
            total = total + profit[index].value
        }

        return total
    }

}