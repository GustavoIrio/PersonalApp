import { prisma } from "../../../../database/PrismaClient";

interface IUserAccount {
    uid: string;
}

export class GetPersonalAccountUseCase {
    async execute({ uid }: IUserAccount) {
        try {
            const user = await prisma.personal.findUnique({
                where: {
                    uid
                }, include: {
                    personal_feedback: true,
                    personal_gym: true,
                    personal_specialty: {
                        select: {
                            specialty: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            })
            return user;
        } catch (error) {
            throw new Error("Account not exist");
            
        }
    } 
}