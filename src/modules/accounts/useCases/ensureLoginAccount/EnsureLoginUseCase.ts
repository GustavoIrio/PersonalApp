import axios from "axios";

interface ILogin {
    email: string;
    password: string;
}

export class EnsureLoginUseCase {
    async execute({ email, password }: ILogin) {

        try {
            const login = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrgV-_fC4A8mEjQjNPpRd_DAOQAXHBkYY`,
            {
                email: email,
                password: password,
                returnSecureToken: true,
            },
        )
            return login.data;
        
        } catch (err) {
            throw new Error("Invalid username or password")
        }
        
    }
}