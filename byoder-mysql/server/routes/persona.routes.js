import { Router } from "express";
import {
  getPersonas,
  getPersona,
  createPersona,
  deletePersona,
  updatePersona,
} from "../controllers/persona.controllers.js";

const router = Router();

router.get("/personas", getPersonas);

router.get("/persona/:id", getPersona);

router.post("/personas", createPersona);

router.put("/personas/:id", updatePersona);

router.delete("/personas/:id", deletePersona);

export default router;
