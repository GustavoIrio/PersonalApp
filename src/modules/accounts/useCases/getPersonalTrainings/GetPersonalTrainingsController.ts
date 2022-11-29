import { Request, Response } from "express";
import { GetPersonalTrainingsUseCase } from "./GetPersonalTrainingsUseCase";


export class GetPersonalTrainingsController {
    async handle(req: Request, res: Response) {
        const { uid } = req;

        const getPersonalTrainingsUseCase = new GetPersonalTrainingsUseCase();

        const result = await getPersonalTrainingsUseCase.execute({ uid });

        console.log(result)

        return res.status(200).json(result);
    }
}