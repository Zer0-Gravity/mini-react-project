import type { Request, Response } from "express";
import User from "../model/user.js";

const handleLoggingOut = async (req: Request, res: Response) => {
    const cookies = req.cookies; //Get the cookies
    const refreshToken = cookies.jwt;

    //Check if the user with this cookies exist
    if (!cookies?.jwt) return res.sendStatus(204);
    const foundUser = await User.findOne({ refreshToken }).exec();

    if (!foundUser) {
        res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        return res.sendStatus(204);
    }

    //Save new database
    foundUser.refreshToken = "";
    await foundUser.save();
    res.sendStatus(204);
};

export default handleLoggingOut;
