const pool = require("../../../database/db.js");
const getmediocom = (req, res) => {
  res.send("hola buenas tardes");
};

const postmediocom = async (req, res) => {
  const { mediocom, mediotrans, viapredominante, buenestado } = req.body;
  const mediocomJSON = JSON.stringify(mediocom);
  const mediotransJSON = JSON.stringify(mediotrans);
  try {
    await pool.query(
      "INSERT INTO medioscom (mediocom, mediotrans, viapredominante, buenestado)VALUES (?, ?, ?, ?)",
      [mediocomJSON, mediotransJSON, viapredominante, buenestado]
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
  getmediocom,
  postmediocom,
};
