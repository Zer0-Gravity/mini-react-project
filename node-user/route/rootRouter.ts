import { Router } from "express";
import userRegister from "./register.js";
import userLogin from "./login.js";
import userRefresh from "./refresh.js";

const rootRouter = Router();

rootRouter.use("/register", userRegister);
rootRouter.use("/login", userLogin);
rootRouter.use("/refresh", userRefresh);

export default rootRouter;
