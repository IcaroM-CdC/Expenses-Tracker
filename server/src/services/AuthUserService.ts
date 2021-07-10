import { getRepository } from "typeorm"
import { User } from "../entities/users"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


export const privateKey = "ffdea0c3bed13906e0d6e9a59a4a6909"

interface LoginRequest {
    email: string,
    password: string,
}

export class AuthUserService {

    async execute({ email, password }: LoginRequest) {

        const userRepository = getRepository(User)

        const user = await userRepository.findOne({
            email: email,
        })

        if (!user){
            throw new Error("wrong password or username")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch){
            throw new Error("wrong password or username")
        }

        const token = sign({ email: user.name, username: user.email }, privateKey, { subject: user.id, expiresIn: "1d" })

        return token

    }

}