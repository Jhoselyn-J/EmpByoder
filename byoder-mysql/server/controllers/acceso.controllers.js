import { pool } from "../db.js";

export const getAccesos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM acceso");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAccesoUsuario = async (req, res) => {
  try {
      const [result] = await pool.query("select persona.nombre, persona.ap_paterno as apellido,persona.ci ,acceso.tipo as tipoAcceso from usuario, acceso, persona where usuario.id_acceso = acceso.id and persona.id = usuario.id_persona;");
      res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};
