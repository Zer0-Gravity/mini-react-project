import type { Router } from "express";
import express from "express";
import handleLoggingOut from "../controllers/logoutController.js";

const router: Router = express.Router();

router.post("/", handleLoggingOut);

export default router;
