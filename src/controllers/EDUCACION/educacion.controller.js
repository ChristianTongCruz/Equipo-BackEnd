const pool = require("../../../database/db.js");
const getEducacion = (req, res) => {
  res.send("*se muesta la vista de la vivienda*");
};

const postEducacion = async (req, res) => {
  const {
    idiomaniñez,
    leeryescribir,
    estudio_papa,
    estudio_mama,
    estudio_hijo,
    estudio_hija,
    tiene_hijos,
    localidad_cuenta,
    medio_movilizar,
    tiene_computadora,
    tiene_biblioteca,
    servicios_basicos,
  } = req.body;
  //LAS PREGUNTAS DE OPCION MULTIPLE SE INGRESARAN EN FORMATO JSON PARA EL MEJOR MANEJO DE LOS DATOS Y NO HACER LAS COSAS POR SEPARADO
  const localidad_cuentaJson = JSON.stringify(req.body.localidad_cuenta);
  const medio_movilizarJson = JSON.stringify(req.body.medio_movilizar);
  const servicios_basicosJson = JSON.stringify(req.body.servicios_basicos);
  console.log(localidad_cuentaJson);
  try {
    await pool.query(
      "INSERT INTO prueba.educacion(idiomaniñez,leeryescribir,estudio_papa,estudio_mama,estudio_hijo,estudio_hija,tiene_hijos,localidad_cuenta,medio_movilizar,tiene_computadora,tiene_biblioteca,servicios_basicos)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        idiomaniñez,
        leeryescribir,
        estudio_papa,
        estudio_mama,
        estudio_hijo,
        estudio_hija,
        tiene_hijos,
        localidad_cuentaJson,
        medio_movilizarJson,
        tiene_computadora,
        tiene_biblioteca,
        servicios_basicosJson,
      ]
    );
    res.send("exito al ingresar a la base de datos");
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al insertar los datos en la base de datos");
  }
};

module.exports = {
  getEducacion,
  postEducacion,
};
