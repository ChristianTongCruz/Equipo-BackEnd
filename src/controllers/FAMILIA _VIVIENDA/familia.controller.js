const pool = require("../../../database/db.js");
const getFamilia = (req, res) => {
  res.render("familiayhogar");
};

const postFamilia = async (req, res) => {
  const {
    familias,
    hombres,
    mujeres,
    total,
    years,
    estado,
    habilidades,
    decisiones,
    otros,
    seguro,
    tiposeguro,
  } = req.body; //el body ya viene incluido con el express, el body lo que hace es  acceder a los datos enviados en el cuerpo de la solicitud
  try {
    await pool.query(
      "INSERT INTO familiayhogar (familias, hombres, mujeres, total, years, estado, habilidades , decisiones, otros , seguro , tiposeguro) VALUES (?, ?, ? ,? , ? , ? , ? , ? ,? , ?,?)",
      [
        familias,
        hombres,
        mujeres,
        total,
        years,
        estado,
        habilidades,
        decisiones,
        otros,
        seguro,
        tiposeguro,
      ]
    );
    console.log("Datos Insertados a la base de datos con exito papu :v");
    res.render("familiayhogar");
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Ocurrió un error al insertar los datos en la base de datos");
  }
};

module.exports = { getFamilia, postFamilia };
