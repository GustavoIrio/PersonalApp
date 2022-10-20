import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { firebaseAdmin } from "../../../../database/Firebase-admin";
import { prisma } from "../../../../database/PrismaClient";

interface ICreateAccount {
    fullName: string;
    email: string;
    password: string;
}

export class CreateAccountUseCase {
    async execute({ fullName, email, password }: ICreateAccount) {
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
            var uid;
            // create user on Firebase
            await firebaseAdmin.auth().createUser({
                displayName: fullName,
                email,
                password,
            })
            .then((UserRecord) => {
                uid = UserRecord.uid
            })

            // create user on Database
            await prisma.user.create({
                data: {
                    name: fullName,
                    email,
                    uid,
                }
            })

            return ("User created")
        } catch (err) {
            throw new Error("Error creating new user");
        }

    }
}