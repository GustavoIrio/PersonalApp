import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { firebaseAdmin } from "../../../../database/Firebase-admin";

interface ICreateAccount {
    fullName: string;
    email: string;
    password: string;
}

export class CreateAccountUseCase {
    async execute({ fullName, email, password }: ICreateAccount) {
        // saving at firebase auth
        const userFirebase = await firebaseAdmin.auth()
            .createUser({
                displayName: fullName,
                email: email,
                password,
            })
            .then((UserRecord) => {
                firebaseAdmin.auth().generateEmailVerificationLink(email);
            })
            .catch((err) => {
                throw new Error("Error creating new user: ", err) 
            })

            return userFirebase;
    }
}