import { Request, Response } from "express";
import { GetPersonalAccountUseCase } from "./GetPersonalAccountUseCase";

export class GetPersonalAccountController {
    async handle(req: Request, res: Response) {
        const { uid } = req;

        const getPersonalAccountUseCase = new GetPersonalAccountUseCase();

        const result = await getPersonalAccountUseCase.execute({ uid });

        console.log(result)

        return res.status(200).json(result);
    }
}