const pool = require("../../../database/db.js");
const getmediocom = async (req, res) => {
  const [resultado] = await pool.query("select *from medios_comunicacion");
  res.json(resultado);
};
const getmediocombyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "select *from medios_comunicacion where id_medios_comunicacion = ?",
    [id]
  );
  res.json(resultado);
};
const postmedioscom = async (req, res) => {
  // aqui iran los valores name de cada input del form del que enviaran los datos
  const { valor1, valor2, valor3, valor4 } = req.body;
  try {
    await pool.query(
      "INSERT INTO medios_comunicacion (medios_comunicacion_acceso_familia, medio_transporte_utiliza_localidad, via_predominante_localidad, buen_estado_via) VALUES (?, ?, ?, ?)",
      [valor1, valor2, valor3, valor4]
    );
    res.send("DATOS GUARDADOS CORRECTAMENTE");
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getmediocom,
  getmediocombyid,
  postmedioscom,
};
