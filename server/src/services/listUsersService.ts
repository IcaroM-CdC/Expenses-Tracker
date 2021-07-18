import { getRepository } from "typeorm"
import { User } from "../entities/users"

export class ListUsersService {

    async execute(){

        const userRepository = getRepository(User)
        const userList = await userRepository.find()
        const processedUserList: Array<object> = []

        userList.forEach(user => {
            
            let processedUser = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            processedUserList.push(processedUser)
        })

        return processedUserList

    }
}