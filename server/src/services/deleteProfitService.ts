import { getRepository } from "typeorm"
import { Profit } from "../entities/profits"

interface ProfitRequest {
    id: string
}

export class DeleteProfitService {

    async execute({ id }: ProfitRequest){

        const profitRepository = getRepository(Profit)

        const profitExist = await profitRepository.findOne({
            id: id
        })

        if (!profitExist){
            throw new Error("Invalid profit")
        }

        const deleted = await profitRepository.delete({
            id: id
        })

        if (!deleted){
            throw new Error("An error occurred in the deletion")
        }

        return profitExist

    }

}