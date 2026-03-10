import type { Request, Response } from "express";
import type { UserTypeProp } from "../src/type.js";
import User from "../model/user.js";
import bcrypt from "bcrypt";

const handleNewUser = async (req: Request, res: Response) => {
    const { firstname, lastname, email, password }: UserTypeProp = req.body;

    //Check if there is empty field
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: "There is an empty field" });
    }

    //Find the duplicated email, if so throw and error
    const duplicatedEmail = await User.findOne({ email: email }).exec();
    if (duplicatedEmail)
        return res.status(409).json({ message: "Email already taken" });

    try {
        //Hashed the password using bcrypt with 10 salt
        const hashedPassword = await bcrypt.hash(password, 10);

        //Create a mongo db database
        const newUser: UserTypeProp = await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPassword,
        });

        // Throw success respond
        res.status(201).json({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
        });
    } catch (error) {
        res.sendStatus(500);
    }
};

export default handleNewUser;
