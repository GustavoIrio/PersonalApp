import { prisma } from "../../../../database/PrismaClient";

interface IUserAccount {
    uid: string;
    telephone: string;
    name: string;
    description: string;
    hourPrice: number;
}

export class EditPersonalAccountUseCase {
    async execute({ uid, telephone, name, description, hourPrice }: IUserAccount) {
        try {
            const user = await prisma.personal.update({
                where: {
                    uid
                },
                data: {
                    telephone,
                    name,
                    description,
                    hours_price: hourPrice
                }
            })

            return user;
        } catch (error) {
            throw new Error("Account not exist");
        }
    } 
}