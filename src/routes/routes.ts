import { Router } from "express";
import { ensureAuthenticatedAccount } from "../middleware/ensureAuthenticatedAccount";
import { CreateAccountController } from "../modules/accounts/useCases/createAccount/CreateAccountController";
import { EnsureLoginController } from "../modules/accounts/useCases/ensureLoginAccount/EnsureLoginController";
import { GetUserAccountController } from "../modules/accounts/useCases/getUserAccount/GetUserAccountController";
import { ResetPasswordByAppController } from "../modules/accounts/useCases/resetPasswordByApp/ResetPasswordByAppController";
import { ResetPasswordByEmailController } from "../modules/accounts/useCases/resetPasswordByEmail/ResetPasswordByEmailController";

const routes = Router();

const createAccountController = new CreateAccountController();
const ensureLoginController = new EnsureLoginController();
const resetPasswordByAppController = new ResetPasswordByAppController();
const resetPasswordByEmailController = new ResetPasswordByEmailController();
const getUserAccountController = new GetUserAccountController();

// Login routes
routes.post("/login", ensureLoginController.handle);
routes.post("/login/reset", resetPasswordByEmailController.handle)

// Register routes
routes.post("/register/user", createAccountController.handle);

// Account routes
routes.get("/account/user", ensureAuthenticatedAccount, getUserAccountController.handle);
routes.post("/account/user/reset", ensureAuthenticatedAccount, resetPasswordByAppController.handle);

export { routes };