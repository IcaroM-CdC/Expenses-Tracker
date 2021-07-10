import { getRepository } from "typeorm"
import { Profit } from "../entities/profits"
import { User } from "../entities/users"

interface ProfitRequest {
    value: number
    day: number
    month: number
    year: number
    ownerId: string
}

export class CreateProfitService {

    async execute({ value, day, month, year, ownerId }: ProfitRequest) {

        const profitRepository = getRepository(Profit)
        const userRepository = getRepository(User)

        if (!value){
            throw new Error("valor ausente")
        }

        if (!ownerId){
            throw new Error("usuário inexistente")
        }

        if (!day || !month || !year){
            const date = Date.now()
            console.log(date)
            throw new Error("data incorreta")
        }

        // TODO: Opção de pegar os dados de data de hoje, para não precisar receber obrigatoriamente do corpo da requisição

        const ownerExists = await userRepository.findOne({
            id: ownerId
        })

        if (!ownerExists){
            throw new Error("usuário inexistente")
        }
    
        const profit = profitRepository.create({
            value: value,
            ownerId: ownerId,
            day: day,
            month: month,
            year: year
        })

        await profitRepository.save(profit)

        return profit
    }
}