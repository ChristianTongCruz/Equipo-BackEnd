

const pool = require("../../database/db");

const getFamiliayhogar = (req, res) => {
  res.render("familiayhogar");
};

const postFamiliayhogar =  (req, res) => {
  const { familias, hombres, mujeres, total, years, estado, habilidades, decisiones, otros, seguro , tiposeguro } = req.body;//el body ya viene incluido con el express, el body lo que hace es  acceder a los datos enviados en el cuerpo de la solicitud
  const sql = "INSERT INTO familiayhogar (familias, hombres, mujeres, total, years, estado, habilidades , decisiones, otros , seguro , tiposeguro) VALUES (?, ?, ? ,? , ? , ? , ? , ? ,? , ?,?)";
  const values = [familias,hombres, mujeres, total, years, estado, habilidades,decisiones, otros, seguro, tiposeguro];

  pool.query(sql, values, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Datos Insertados a la base de datos con exito papu :v");
      res.render("familiayhogar");
    }
  });
};

module.exports = { getFamiliayhogar , postFamiliayhogar};