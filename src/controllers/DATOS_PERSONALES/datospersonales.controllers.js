//exporto mi base de datos para usar
const pool = require("../../../database/db.js");

const getdatospersonales = (req, res) => {
  res.render("datospersonales");
};

const datospersonales = async (req, res) => {
  const { lugar, edad, sexo, estado, reside, pisos } = req.body; //el body ya viene incluido con el express, el body lo que hace es  acceder a los datos enviados en el cuerpo de la solicitud
  try {
    await pool.query(
      "INSERT INTO datospersonales (lugar, edad, sexo, estado, reside, pisos) VALUES (?, ?, ? ,? , ?,?)",
      [lugar, edad, sexo, estado, reside, pisos]
    );
    console.log("Datos Insertados a la base de datos con exito papu :v");
    res.render("datospersonales");
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al insertar los datos en la base de datos");
  }
};

module.exports = { getdatospersonales, datospersonales };
