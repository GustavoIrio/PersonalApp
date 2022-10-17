import { Request, Response } from "express";
import { ResetPasswordByAppUseCase } from "./ResetPasswordByAppUseCase";

export class ResetPasswordByAppController {
    async handle(req: Request, res: Response) {
        const { uid } = req;
        const { password } = req.body;

        const resetPasswordByAppUseCase = new ResetPasswordByAppUseCase();

        const result = resetPasswordByAppUseCase.execute({
            uid,
            password
        })

        return res.status(201).json(result);
    }
}