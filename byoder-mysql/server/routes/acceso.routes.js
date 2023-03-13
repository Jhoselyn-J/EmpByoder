import { Router } from "express";
import { getAccesos, getAccesoUsuario } from "../controllers/acceso.controllers.js";

const router = Router();

router.get("/accesos", getAccesos);
router.get("/accesUsers", getAccesoUsuario);

export default router;
