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
                }, include: {
                    gym_feedback: true,
                    personal_Feedback: true,
                    training: true,
                }
            })
            return user;
        } catch (error) {
            throw new Error("Account not exist");
            
        }
    } 
}