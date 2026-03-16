import type { Request, Response } from "express";
import User from "../model/user.js";

const handleLoggingOut = async (req: Request, res: Response) => {
    const cookies = req.cookies; //Get the cookies
    const refreshToken = cookies.jwt;
    console.log(cookies);

    //Check if the user with this cookies exist
    if (!cookies?.jwt) return res.sendStatus(204);
    const foundUser = await User.findOne({ refreshToken }).exec();

    if (foundUser) {
        //delete the token
        foundUser.refreshToken = "";
        await foundUser.save();
    }

    console.log(foundUser);

    //Clear Cookie
    res.clearCookie("jwt", {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.sendStatus(204);
};

export default handleLoggingOut;
