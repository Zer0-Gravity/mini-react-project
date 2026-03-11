declare global {
    namespace Express {
        interface Request {
            email?: string;
        }
    }
}

export interface UserTypeProp {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    refreshToken: string;
}
