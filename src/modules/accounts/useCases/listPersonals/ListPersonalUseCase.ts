import { Personal } from "@prisma/client";
import { prisma } from "../../../../database/PrismaClient";

export class ListPersonalsUseCase {
    async execute() {
        try {
            const list = await prisma.personal.findMany({
                include: {
                    personal_specialty: {
                        select: {
                            specialty: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    personal_feedback: true,
                    personal_gym: true,
                }
            });
            
            return list;
        } catch (error) {
            throw new Error("Error to list Personals");
            
        }
    }
}