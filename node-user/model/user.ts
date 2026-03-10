import { Schema } from "mongoose";
import type { UserTypeProp } from "../src/type.js";

const userSchema = new Schema<UserTypeProp>({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default userSchema;
