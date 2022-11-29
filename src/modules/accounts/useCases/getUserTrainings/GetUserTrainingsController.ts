import { Request, Response } from "express";
import { GetUserTrainingsUseCase } from "./GetUserTrainingsUseCase";


export class GetUserTrainingsController {
    async handle(req: Request, res: Response) {
        const { uid } = req;

        const getUserTrainingsUseCase = new GetUserTrainingsUseCase();

        const result = await getUserTrainingsUseCase.execute({ uid });

        console.log(result)

        return res.status(200).json(result);
    }
}