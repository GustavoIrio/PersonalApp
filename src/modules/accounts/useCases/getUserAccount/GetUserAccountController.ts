import { Request, Response } from "express";
import { GetUserAccountUseCase } from "./GetUserAccountUseCase";

export class GetUserAccountController {
    async handle(req: Request, res: Response) {
        const { uid } = req;

        console.log(uid)

        const getUserAccountUseCase = new GetUserAccountUseCase();

        const result = getUserAccountUseCase.execute({ uid });

        console.log(result)

        return res.status(200).json(result);
    }
}