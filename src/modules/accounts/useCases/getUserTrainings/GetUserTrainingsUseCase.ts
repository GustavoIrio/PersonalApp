import { prisma } from "../../../../database/PrismaClient";

interface IUserAccount {
    uid: string;
}
export class GetUserTrainingsUseCase {
    async execute({ uid }: IUserAccount) {
        try {
            const user = await prisma.user.findUnique({
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
                            personal: {
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