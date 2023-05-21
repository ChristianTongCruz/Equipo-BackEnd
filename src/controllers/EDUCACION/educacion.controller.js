const pool = require("../../../database/db.js");
const getEducacion = async (req, res) => {
  const [resultado] = await pool.query("select *from educacion");
  res.json(resultado);
};
const getEducacionbyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "select *from educacion where id_educacion=?",
    [id]
  );
  res.json(resultado);
};
const postEducacion = async (req, res) => {
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
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO educacion (lenguaje_aprendio_ninez, leer_escribir, nivel_estudio_papa, nivel_estudio_mama, nivel_estudio_hijo1, nivel_estudio_hijo2, hijos_escolar_no_asisten, localidad_cuenta, medio_movilizarse, ie_ccpp_las_palmas_computadoras, ie_ccpp_las_palmas_biblioteca, ie_ccpp_las_palmas_servicios_basicos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
      ]
    );
    res.send("DATOS GUARDADOS CORRECTAMENTE");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEducacion,
  getEducacionbyid,
  postEducacion,
};
