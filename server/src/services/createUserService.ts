import { getRepository } from "typeorm"
import { User } from "../entities/users"
import { hash } from "bcryptjs"

interface UserRequest {
    name: string
    password: string
    email: string
    admin?: boolean
}


export class CreateUserService {

    async execute({name, password, email, admin}: UserRequest){
        
        const userRepository = getRepository(User)

        if (!email){
            throw new Error("email ausente")
        }

        if (!name){
            throw new Error("nome ausente")
        }
        
        if (!password){
            throw new Error("senha ausente")
        }

        if (!admin){
            admin = false
        }

        const userAlreadyExists = await userRepository.findOne({
            email: email
        })

        if (userAlreadyExists){
            throw new Error("Usuário ja cadastrado")
        }


        const passwordHash = await hash(password, 8)

        const user = userRepository.create({
            name: name,
            password: passwordHash,
            email: email,
            isAdmin: admin,
        })

        await userRepository.save(user)

        return user
    }

}









