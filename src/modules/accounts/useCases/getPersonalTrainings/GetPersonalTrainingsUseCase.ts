import { prisma } from "../../../../database/PrismaClient";

interface IPersonalAccount {
    uid: string;
}
export class GetPersonalTrainingsUseCase {
    async execute({ uid }: IPersonalAccount) {
        try {
            const user = await prisma.personal.findUnique({
                where: {
                    uid
                }, select: {
                    training: {
                        select: {
                            training_price: true,
                            training_description: true,
                            training_location: true,
                            training_time: true,
                            date_hour: true,
                            user: {
                                select: {
                                    name: true,
                                    email: true
                                }
                            }
                        },
                    }
                }
            })
            return user;
        } catch (error) {
            throw new Error("Some error occurred while listing the workouts");
        }
    }
}