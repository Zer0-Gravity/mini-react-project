import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { UserTypeProp } from "../src/type.js";
import User from "../model/user.js";

const handleUserLogin = async (req: Request, res: Response) => {
    const { email, password }: UserTypeProp = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Field can't be empty" });
    }

    //find the match user by email
    const foundUser = await User.findOne({ email: email }).exec();
    if (!foundUser) return res.sendStatus(401); //Send unauthorized access error code

    const matchPassword = await bcrypt.compare(password, foundUser.password);

    if (matchPassword) {
        //Generate token code
        const accessToken = jwt.sign(
            { userInfo: { email: foundUser.email } },
            process.env.ACCESS_TOKEN_SECRET as string,
            { expiresIn: "5m" }, //expiration 5 minute
        );

        const refreshToken = jwt.sign(
            { userInfo: { email: foundUser.email } },
            process.env.REFRESH_TOKEN_SECRET as string,
            { expiresIn: "1d" }, //expiration 1 day
        );

        //Save refresh token to the database
        foundUser.refreshToken = refreshToken;
        await foundUser.save();

        res.cookie("jwt", refreshToken, {
            httpOnly: true, //Prevent Javascript for reading cookies
            maxAge: 24 * 60 * 60 * 1000,
        });

        //Send json respond for the front end to read
        return res.status(200).json({
            message: "Login successful",
            accessToken: accessToken,
        });
    } else {
        res.status(401).json({
            message: "Password incorrect, please try again",
        });
    }
};

export default handleUserLogin;
