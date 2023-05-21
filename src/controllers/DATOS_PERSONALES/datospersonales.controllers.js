//exporto mi base de datos para usar
const pool = require("../../../database/db.js");

const getdatospersonales = async (req, res) => {
  const [resultado] = await pool.query("select *from datos_generales");
  res.json(resultado);
};
const getdatospersonalesbyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "select *from datos_generales where id_datos_generales=?",
    [id]
  );
  res.json(resultado);
};
const postdatospersonales = async (req, res) => {
  // aqui iran los valores name de cada input del form del que enviaran los datos
  const { valor1, valor2, valor3, valor4, valor5, valor6 } = req.body;
  try {
    await pool.query(
      "INSERT INTO datos_generales(lugar_nacimiento, sexo, edad, estado_civil, residencia_permanente_vivienda, numero_piso_vivienda)VALUES (?, ?, ?, ?, ?, ?)",
      [valor1, valor2, valor3, valor4, valor5, valor6]
    );
    res.send("DATOS GUARDADOS CORRECTAMENTE");
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getdatospersonales,
  getdatospersonalesbyid,
  postdatospersonales,
};
