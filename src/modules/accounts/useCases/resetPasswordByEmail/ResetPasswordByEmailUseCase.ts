import axios, { AxiosError } from "axios";

interface IResetPassword {
    email: string;
}

export class ResetPasswordByEmailUseCase {
    async execute({ email }: IResetPassword) {

        try {
            const resetPassword = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDrgV-_fC4A8mEjQjNPpRd_DAOQAXHBkYY`,
                {
                    requestType: "PASSWORD_RESET",
                    email,
                }
            )
            return resetPassword.statusText;
        } catch (err) {
            throw new Error("Error occurred to send")
        }
    }
}