import { Request, Response } from "express";
import { EditPersonalAccountUseCase } from "./EditPersonalAccountUseCase";

export class EditPersonalAccountController {
    async handle(req: Request, res: Response) {
        const { uid } = req;
        const { telephone, name, description, hourPrice } = req.body;

        const editUserAccountUseCase = new EditPersonalAccountUseCase();

        const result = await editUserAccountUseCase.execute({ uid, telephone, name, description, hourPrice });

        return res.status(200).json(result);
    }
}