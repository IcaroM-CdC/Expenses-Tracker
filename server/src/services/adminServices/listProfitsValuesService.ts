import { getRepository } from "typeorm"
import { Profit } from "../../entities/profits"

export class ListProfitsValuesService {

    async execute(){

        const expenseRepository = getRepository(Profit)
        const profits = await expenseRepository.find()
        const profitList: Array<number> = []

        profits.forEach((profit) => {
            profitList.push(profit.value)
        })

        return profitList
    }

}