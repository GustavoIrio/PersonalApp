import { Request, Response } from "express";
import { CreatePersonalAccountUseCase } from "./CreatePersonalAccountUseCase";


export class CreatePersonalAccountController {
    async handle(req: Request, res: Response) {
        const { fullName, email, password, cpf, hourPrice, description, telephone, cityName, specializations } = req.body;

        const createPersonalAccountUseCase = new CreatePersonalAccountUseCase();

        const result = await createPersonalAccountUseCase.execute({
            fullName,
            email,
            password, 
            cpf, 
            hourPrice, 
            description, 
            telephone, 
            cityName,
            specializations
        })

        return res.status(201).json(result);
    }
}