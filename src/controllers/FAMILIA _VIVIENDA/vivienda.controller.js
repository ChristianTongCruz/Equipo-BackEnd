const nodemon = require("nodemon");
const pool = require("../../../database/db.js");
const getVivienda = (req, res) => {
  res.send("Estas obteniendo la vivienda");
};

////////////////

const postVivienda = async (req, res) => {
  const {
    tipovivienda,
    estadoregistral,
    titulopropiedad,
    habitaciones,
    dormitorios,
    material_piso,
    material_pared,
    material_techo,
    abastecimiento,
    tiempo_agua,
    tanque,
    servicio_higienico,
    tipo_alumbrado,
    combustible,
    accion_basura,
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO vivienda(tipovivienda,estadoregistral,titulopropiedad,habitaciones,dormitorios,material_piso,material_pared,material_techo,abastecimiento,tiempo_agua,tanque,servicio_higienico,tipo_alumbrado,combustible,accion_basura)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        tipovivienda,
        estadoregistral,
        titulopropiedad,
        habitaciones,
        dormitorios,
        material_piso,
        material_pared,
        material_techo,
        abastecimiento,
        tiempo_agua,
        tanque,
        servicio_higienico,
        tipo_alumbrado,
        combustible,
        accion_basura,
      ]
    );
    res.send("exito al ingresar a la base de datos");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Ocurrió un error al insertar los datos en la base de datos");
  }
};

module.exports = {
  getVivienda,
  postVivienda,
};
