import type { Router } from "express";
import express from "express";
import handleNewUser from "../controllers/registerController.js";

const router: Router = express.Router();

router.post("/", handleNewUser);

export default router;
