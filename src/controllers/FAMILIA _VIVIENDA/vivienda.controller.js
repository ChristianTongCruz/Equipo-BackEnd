const pool = require("../../../database/db.js");
const getVivienda = async (req, res) => {
  const [resultado] = await pool.query("select *from vivienda");
  res.json(resultado);
};
const getViviendabyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "select *from vivienda where id_vivienda= ?",
    [id]
  );
  res.json(resultado);
};
const postvivienda = async (req, res) => {
  // aqui iran los valores name de cada input del form del que enviaran los datos
  const {
    valor1,
    valor2,
    valor3,
    valor4,
    valor5,
    valor6,
    valor7,
    valor8,
    valor9,
    valor10,
    valor11,
    valor12,
    valor13,
    valor14,
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO vivienda (tipo_vivienda, estado_registral_vivienda, titulo_propiedad, ambientes_habitaciones_vivienda, dormitorios_vivienda, material_predominante_piso, material_predominante_pared, material_predominante_techo, disposicion_agua_publica_domicilio, tanque_agua, servicio_higienico_conecta, tipo_alumbrado, combustible_cocinar, basura_hogar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        valor1,
        valor2,
        valor3,
        valor4,
        valor5,
        valor6,
        valor7,
        valor8,
        valor9,
        valor10,
        valor11,
        valor12,
        valor13,
        valor14,
      ]
    );
    res.send("DATOS GUARDADOS CORRECTAMENTE");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVivienda,
  getViviendabyid,
  postvivienda,
};
