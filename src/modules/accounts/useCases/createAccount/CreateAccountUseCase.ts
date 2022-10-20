import { firebaseAdmin } from "../../../../database/Firebase-admin";
import { prisma } from "../../../../database/PrismaClient";

interface ICreateAccount {
    displayName: string;
    email: string;
    password: string;
}

export class CreateAccountUseCase {
    async execute({ displayName, email, password }: ICreateAccount) {
        // checking if email exists
        const emailExist = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(emailExist) {
            throw new Error("Email already exists!");
        }
        
        try {
            // create user on Firebase
            await firebaseAdmin.auth().createUser({
                displayName,
                email,
                password,
            })

            // create user on Database
            await prisma.user.create({
                data: {
                    name: displayName,
                    email,
                }
            })

            return ("User created")
        } catch (err) {
            throw new Error("Error creating new user");
        }

    }
}