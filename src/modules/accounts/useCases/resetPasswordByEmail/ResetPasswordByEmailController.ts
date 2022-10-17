import { Request, Response } from "express";
import { ResetPasswordByEmailUseCase } from "./ResetPasswordByEmailUseCase";


export class ResetPasswordByEmailController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;

        const resetPasswordByEmailUseCase = new ResetPasswordByEmailUseCase();

        const result = await resetPasswordByEmailUseCase.execute({
            email
        })

        return res.status(201).json(result);
    }
}