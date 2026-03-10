import "dotenv/config";
import type { Application } from "express";
import express from "express";
import mongoose from "mongoose";
import tryConnectDB from "../config/databaseConnection.js";
import handleNewUser from "../controllers/registerController.js";

const app: Application = express();
const PORT = process.env.PORT || 3500;

tryConnectDB(); //Call function for connecting to mongoDB

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //Middleware for express, so the backend can read JSON file

//Call router for the controller
app.use("/register", handleNewUser);

//Listen server from port 3500 and connect to mongoDB
mongoose.connection.once("open", () => {
    console.log("Connected to mongo database...");
    app.listen(PORT, () => console.log(`Server start at por ${PORT}`));
});
