import { prisma } from "../../../../database/PrismaClient";

interface IUserAccount {
    uid: string;
    telephone: string;
    name: string;
    description: string;
}

export class EditUserAccountUseCase {
    async execute({ uid, telephone, name, description }: IUserAccount) {
        try {
            const user = await prisma.user.update({
                where: {
                    uid
                },
                data: {
                    telephone,
                    name,
                    description
                }
            })

            return user;
        } catch (error) {
            throw new Error("Account not exist");
        }
    } 
}