const pool = require("../../../database/db.js");

const getaspectostecnologicos = async (req, res) => {
  const [resultado] = await pool.query(
    "SELECT * FROM aspectos_tecnologicos_informacion_comunicacion;"
  );
  res.json(resultado);
};
const getaspectostecnologicosbyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "SELECT * FROM aspectos_tecnologicos_informacion_comunicacion WHERE idaspectos_tecnologicos_informacion_comunicacion =?",
    [id]
  );
  res.json(resultado);
};
const postaspectostecnologicos = async (req, res) => {
  const {
    hogar_tiene,
    localidad_cuenta,
    utiliza_servicio_internet,
    tipo_informacion_internet,
    calidad_servicio_internet,
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO aspectos_tecnologicos_informacion_comunicacion (hogar_tiene,localidad_cuenta,utiliza_servicio_internet,tipo_informacion_internet,calidad_servicio_internet) VALUES (?,?,?,?,?)",
      [
        hogar_tiene,
        localidad_cuenta,
        utiliza_servicio_internet,
        tipo_informacion_internet,
        calidad_servicio_internet,
      ]
    );
    res.send("EXITO AL INGRESAR A LA BASE DE DATOS");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getaspectostecnologicos,
  getaspectostecnologicosbyid,
  postaspectostecnologicos,
};
