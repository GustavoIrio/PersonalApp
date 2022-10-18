import { firebaseAdmin } from "../../../../database/Firebase-admin";

interface IResetPassword {
    uid: string;
    password: string;
}

export class ResetPasswordByAppUseCase {
    async execute({ uid, password }: IResetPassword) {
        
        const userFirebase = await firebaseAdmin.auth()
            .updateUser(uid, {
                password: password
            })
            .catch((err) => {
                throw new Error("Error updating user: ", err) 
            });
        
        firebaseAdmin.auth()
            .revokeRefreshTokens(userFirebase.uid);
    }
}