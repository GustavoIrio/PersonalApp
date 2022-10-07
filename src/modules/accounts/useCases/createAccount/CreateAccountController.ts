import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

export class CreateAccountController {
    async handle(req: Request, res: Response) {
        const { fullName, email, password } = req.body;

        const createAccountUseCase = new CreateAccountUseCase();

        const result = await createAccountUseCase.execute({
            fullName,
            email,
            password
        });

        return res.status(201).json(result);
    }
}