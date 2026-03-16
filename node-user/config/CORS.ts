import type { CorsOptions } from "cors";

const whitelist = ["http://localhost:5173"];

const corsOption: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by origin"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 204,
};

export default corsOption;
