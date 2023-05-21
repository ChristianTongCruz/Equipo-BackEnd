const pool = require("../../../database/db.js");
const getComunitrafa = async (req, res) => {
  const [resultado] = await pool.query(
    "select *from comunicacion_intrafamiliar"
  );
  res.json(resultado);
};
const getComunitrafabyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "SELECT *FROM comunicacion_intrafamiliar WHERE id_comunicacion_intrafamiliar =?",
    [id]
  );
  res.json(resultado);
};
const postComuintrafa = async (req, res) => {
  // aqui iran los valores name de cada input del form del que enviaran los datos
  const {
    comunicacion_permanente_familia,
    comunicacion_trato_pareja_familia,
    comunicacion_padres_hijo,
    comunicacion_hermanos,
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO basepalmas.comunicacion_intrafamiliar (comunicacion_permanente_familia,comunicacion_trato_pareja_familia,comunicacion_padres_hijo,comunicacion_hermanos) VALUES (?,?,?,?)",
      [
        comunicacion_permanente_familia,
        comunicacion_trato_pareja_familia,
        comunicacion_padres_hijo,
        comunicacion_hermanos,
      ]
    );
    res.send("EXITO AL INGRESAR A LA BASE DE DATOS");
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getComunitrafa,
  getComunitrafabyid,
  postComuintrafa,
};
