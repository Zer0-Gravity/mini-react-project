import type { Request, Response } from "express";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
import type { PayloadType } from "../src/type.js";

const handleRefreshToken = async (req: Request, res: Response) => {
    const cookies = req.cookies; //get the available cookies

    if (!cookies?.jwt) return res.sendStatus(403);
    const refreshToken = cookies.jwt;

    //Check if the user with this refresh token exist
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.status(403).json({ message: "no user found" });

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET as string,
        (err: any, decoded: any) => {
            const payload = decoded as PayloadType; //cast decoded into payload type

            //Check for error email mismatch
            if (err || foundUser.email !== payload.userInfo?.email)
                return res.sendStatus(403);

            const accessToken = jwt.sign(
                { userInfo: { email: foundUser.email } },
                process.env.ACCESS_TOKEN_SECRET as string,
                { expiresIn: "1d" },
            );

            res.json({ accessToken });
        },
    );
};

export default handleRefreshToken;
