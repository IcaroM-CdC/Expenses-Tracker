import { getRepository } from "typeorm"
import { User } from "../entities/users"

export class ListUsersService {

    async execute(){

        const userRepository = getRepository(User)
        const userList = await userRepository.find()

        return userList

    }
}