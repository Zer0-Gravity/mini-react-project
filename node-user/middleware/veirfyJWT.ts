import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface PayloadType {
    userInfo: {
        email: string;
    };
}

const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
    const token = authHeader.split(" ")[1]; //Get the actual sting token in the array

    jwt.verify(
        token as string,
        process.env.ACCESS_TOKEN_SECRET as string,
        (err, decode) => {
            if (err) return res.sendStatus(403);

            //Define the payload with the existing type
            const payload = decode as PayloadType;

            req.email = payload.userInfo.email;
            next();
        },
    );
};

export default verifyJwt;
