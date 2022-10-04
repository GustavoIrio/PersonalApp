import { Router } from "express";
import { CreateAccountController } from "../modules/clients/useCases/createAccount/CreateAccountController";

const routes = Router();

const createAccountController = new CreateAccountController();

routes.post("/register/user", createAccountController.handle);

export { routes };