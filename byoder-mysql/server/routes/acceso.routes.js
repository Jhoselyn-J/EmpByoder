import { Router } from "express";
import { getAccesos } from "../controllers/acceso.controllers.js";

const router = Router();

router.get("/accesos", getAccesos);

export default router;
