import { firebaseAdmin } from "../../../../database/Firebase-admin";
// import { hash } from 'bcrypt'
// import { prisma } from "../../../../database/PrismaClient";

interface ICreateAccount {
    fullName: string;
    email: string;
    password: string;
}

export class CreateAccountUseCase {
    async execute({ fullName, email, password }: ICreateAccount) {
        // // if exists at prisma
        // const clientExists = await prisma.user.findUnique({
        //     where: {
        //         email
        //     }
        // });
        
        // if (clientExists) {
        //     throw new Error("The email address is already in use by another account.")
        // }
        
        // const hashPassword = await hash(password, 10);

        // // saving at prisma
        // const user = await prisma.user.create({
        //     data: {
        //         name: fullName,
        //         email,
        //         password: hashPassword,
        //     }
        // })

        // saving at firebase auth
        const userFirebase = await firebaseAdmin.auth()
            .createUser({
                displayName: fullName,
                email: email,
                password,

            })
            .catch((err) => {
                throw new Error("Error creating new user: ", err) 
            })
    }
}