const pool = require("../../../database/db.js");

const getActividadeseconomicas = async (req, res) => {
  const [resultado] = await pool.query(
    "SELECT * FROM actividades_economicas_productivas "
  );
  res.json(resultado);
};
const getActividadeseconomicasbyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "SELECT *FROM actividades_economicas_productivas WHERE id_actividades_economicas_productivas =?",
    [id]
  );
  res.json(resultado);
};
const postActividadeseconomicas = async (req, res) => {
  // aqui iran los valores name de cada input del form del que enviaran los datos
  const {
    actividad_predominante_generar_ingresos,
    aporta_economicamente_familia,
    margen_ingreso_mensual,
    hijos_escolar_trabajan,
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO actividades_economicas_productivas (actividad_predominante_generar_ingresos,aporta_economicamente_familia,margen_ingreso_mensual,hijos_escolar_trabajan) VALUES (?,?,?,?)",
      [
        actividad_predominante_generar_ingresos,
        aporta_economicamente_familia,
        margen_ingreso_mensual,
        hijos_escolar_trabajan,
      ]
    );
    res.send("EXITO AL INGRESAR A LA BASE DE DATOS");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getActividadeseconomicas,
  getActividadeseconomicasbyid,
  postActividadeseconomicas,
};
