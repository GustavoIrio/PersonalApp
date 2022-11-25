import { Request, Response } from "express";
import { ListPersonalsUseCase } from "./ListPersonalUseCase";

export class ListPersonalsController {
    async handle(req: Request, res: Response) {
        const listPersonalsUseCase = new ListPersonalsUseCase();

        const result = await listPersonalsUseCase.execute()

        return res.status(200).json(result);
    }
}