import { pool } from "../db.js";

export const getPersonas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM persona ORDER BY fecha_nac ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPersona = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM persona WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "People not found" });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPersona = async (req, res) => {
  try {
    const { nombre, ap_paterno, ap_materno, ci, fecha_nac } = req.body;
    const [result] = await pool.query(
      "INSERT INTO persona(nombre, ap_paterno, ap_materno, ci, fecha_nac) VALUES (?, ?, ?, ?, ?)",
      [nombre, ap_paterno, ap_materno, ci, fecha_nac]
    );

    res.json({
      id: result.insertId,
      nombre,
      ap_paterno,
      ap_materno,
      ci,
      fecha_nac,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePersona = async (req, res) => {
  try {
    const result = await pool.query("UPDATE persona SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePersona = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM persona WHERE id= ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
