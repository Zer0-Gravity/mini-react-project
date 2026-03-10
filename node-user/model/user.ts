import mongoose, { Schema } from "mongoose";
import type { UserTypeProp } from "../src/type.js";

const UserSchema = new Schema<UserTypeProp>({
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
    refreshToken: String,
});

export default mongoose.model("User", UserSchema);
