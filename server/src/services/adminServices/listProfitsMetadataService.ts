import { getRepository } from "typeorm"
import { Profit } from "../../entities/profits"

export class ListProfitsMetadataService {

    async execute(){

        const expenseRepository = getRepository(Profit)
        const profits = await expenseRepository.find()
        const profitList: Array<object> = []

        profits.forEach((expense) => {
            profitList.push({
                value: expense.value,
                day: expense.day,
                month: expense.month,
                year: expense.year
            })
        })

        return profitList
    }
}