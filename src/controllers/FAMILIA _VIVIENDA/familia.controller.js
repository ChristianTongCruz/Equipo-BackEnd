const pool = require("../../../database/db.js");
const getFamilia = async (req, res) => {
  const [resultado] = await pool.query("select *from familia_vivienda");
  res.json(resultado);
};
const getFamiliabyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "select *from familia_vivienda where id_familia_vivienda = ?",
    [id]
  );
  res.json(resultado);
};
const postfamiliavivienda = async (req, res) => {
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
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO familia_vivienda (familias_viven_vivienda, personas_viven_permanentemente_hombres, personas_viven_permanentemente_mujeres, personas_viven_permanentemente_total, anos_reside_vivienda, mujer_gestacion, miembro_habilidades_diferentes, toma_decisiones_familia, posee_tipo_seguro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9]
    );
    res.send("DATOS GUARDADOS CORRECTAMENTE");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFamilia,
  getFamiliabyid,
  postfamiliavivienda,
};
