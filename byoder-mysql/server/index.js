//leer description
import express from "express";
import { PORT } from "./config.js";
import personaRoutes from "./routes/persona.routes.js";
import accesoRoutes from "./routes/acceso.routes.js";

const app = express();

app.use(express.json());
app.use(personaRoutes);
app.use(accesoRoutes);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);
