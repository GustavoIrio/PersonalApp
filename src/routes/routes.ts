import { Router } from "express";
import { CreateAccountController } from "../modules/accounts/useCases/createAccount/CreateAccountController";
import { EnsureLoginController } from "../modules/accounts/useCases/ensureLoginAccount/EnsureLoginController";

const routes = Router();

const createAccountController = new CreateAccountController();
const ensureLoginController = new EnsureLoginController();

routes.post("/register/user", createAccountController.handle);
routes.post("/login", ensureLoginController.handle);

export { routes };