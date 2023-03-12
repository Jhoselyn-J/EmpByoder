import { pool } from "../db.js";

export const getAccesos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM acceso");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
