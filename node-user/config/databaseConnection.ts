import mongoose from "mongoose";

const tryConnectDB = async () => {
    try {
        //connect to the provided URI database in .env file
        await mongoose.connect(process.env.MONGO_URI as string);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default tryConnectDB;
