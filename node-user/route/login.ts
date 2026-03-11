import type { Router } from "express";
import express from "express";
import handleUserLogin from "../controllers/loginController.js";

const router: Router = express.Router();
router.get("/", handleUserLogin);

export default router;
