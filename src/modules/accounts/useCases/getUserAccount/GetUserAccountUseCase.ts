import { prisma } from "../../../../database/PrismaClient";

interface IUserAccount {
    uid: string;
}

export class GetUserAccountUseCase {
    async execute({ uid }: IUserAccount) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    uid
                },
            })
            console.log(user);
            return user;
        } catch (error) {
            throw new Error("Account not exist");
            
        }
    } 
}