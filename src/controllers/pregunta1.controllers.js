
//exporto mi base de datos para usar
const pool = require("../../database/db");


const getPregunta1 = (req, res) => {
  res.render("pregunta1");
};

const postPregunta1 = (req, res) => {
  const { lugar, edad, sexo, estado, reside, pisos } = req.body;//el body ya viene incluido con el express, el body lo que hace es  acceder a los datos enviados en el cuerpo de la solicitud
  const sql = "INSERT INTO pregunta1 (lugar, edad, sexo, estado, reside, pisos) VALUES (?, ?, ? ,? , ?,?)";
  const values = [lugar, edad,  sexo, estado, reside, pisos];

  pool.query(sql, values, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Datos Insertados a la base de datos con exito papu :v");
      res.render("pregunta1");
    }
  });
};




module.exports = { getPregunta1, postPregunta1 };
