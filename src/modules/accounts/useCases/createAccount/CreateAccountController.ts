import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

export class CreateAccountController {
    async handle(req: Request, res: Response) {
        const { displayName, email, password } = req.body;

        const createAccountUseCase = new CreateAccountUseCase();

        const result = await createAccountUseCase.execute({
            displayName,
            email,
            password
        });

        return res.status(201).json(result);
    }
}