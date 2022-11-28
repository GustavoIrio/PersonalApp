import { Request, Response } from "express";
import { EditUserAccountUseCase } from "./EditUserAccountUseCase";

export class EditUserAccountController {
    async handle(req: Request, res: Response) {
        const { uid } = req;
        const { telephone, name, description } = req.body;

        const editUserAccountUseCase = new EditUserAccountUseCase();

        const result = await editUserAccountUseCase.execute({ uid, telephone, name, description });

        return res.status(200).json(result);
    }
}