const pool = require("../../../database/db.js");
const getComunitrafa = (req, res) => {
  res.send("merco gei");
};

const postComunitrada = async (req, res) => {
  const { exiscom, comPareja, comPadres, comHermanos } = req.body;
  try {
    await pool.query(
      "INSERT INTO comintrafam (exiscom, comPareja, comPadres, comHermanos) VALUES (?, ?, ?, ?)",
      [exiscom, comPareja, comPadres, comHermanos]
    );
    res.send("Datos guardados correctamente uwu");
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al insertar los datos en la base de datos");
  }
};
module.exports = {
  getComunitrafa,
  postComunitrada,
};
