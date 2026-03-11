import { Router } from "express";
import userRegister from "./register.js";
import userLogin from "./login.js";

const rootRouter = Router();

rootRouter.use("/register", userRegister);
rootRouter.use("/login", userLogin);

export default rootRouter;
