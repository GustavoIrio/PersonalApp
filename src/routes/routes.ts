import { Router } from "express";
import { ensureAuthenticatedAccount } from "../middleware/ensureAuthenticatedAccount";
import { CreateAccountController } from "../modules/accounts/useCases/createAccount/CreateAccountController";
import { EnsureLoginController } from "../modules/accounts/useCases/ensureLoginAccount/EnsureLoginController";
import { ResetPasswordByAppController } from "../modules/accounts/useCases/resetPasswordByApp/ResetPasswordByAppController";
import { ResetPasswordByEmailController } from "../modules/accounts/useCases/resetPasswordByEmail/ResetPasswordByEmailController";

const routes = Router();

const createAccountController = new CreateAccountController();
const ensureLoginController = new EnsureLoginController();
const resetPasswordByAppController = new ResetPasswordByAppController();
const resetPasswordByEmailController = new ResetPasswordByEmailController();

routes.post("/register/user",  ensureAuthenticatedAccount, createAccountController.handle);
routes.post("/login", ensureLoginController.handle);
routes.post("/account/reset", ensureAuthenticatedAccount, resetPasswordByAppController.handle);
routes.post("/login/reset", resetPasswordByEmailController.handle)


export { routes };