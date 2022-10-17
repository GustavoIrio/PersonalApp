import { firebaseAdmin } from "../../../../database/Firebase-admin";

interface IResetPassword {
    email: string;
}

export class ResetPasswordByEmailUseCase {
    async execute({ email }: IResetPassword) {
        const userEmail = email;

        await firebaseAdmin.auth()
            .generatePasswordResetLink(userEmail)
            .catch((err) => {
                throw new Error("Some error ocurred: ", err)
            })
    }
}