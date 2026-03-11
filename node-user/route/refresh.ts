import type { Router } from "express";
import express from "express";
import handleRefreshToken from "../controllers/refreshController.js";

const router: Router = express.Router();

router.get("/", handleRefreshToken);

export default router;
