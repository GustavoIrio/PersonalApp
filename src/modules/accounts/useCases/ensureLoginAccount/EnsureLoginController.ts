import { Request, Response } from "express";
import { EnsureLoginUseCase } from "./EnsureLoginUseCase";

export class EnsureLoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const ensureLoginUseCase = new EnsureLoginUseCase();

        const result = await ensureLoginUseCase.execute({
            email,
            password
        });

        return res.status(201).json(result);
    }
}