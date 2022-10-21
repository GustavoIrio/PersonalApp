import { Request, Response } from "express";
import { GetUserAccountUseCase } from "./GetUserAccountUseCase";

export class GetUserAccountController {
    async handle(req: Request, res: Response) {
        const { uid } = req;

        const getUserAccountUseCase = new GetUserAccountUseCase();

        const result = await getUserAccountUseCase.execute({ uid });

        console.log(result)

        return res.status(200).json(result);
    }
}