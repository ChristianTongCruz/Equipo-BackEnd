const express = require("express");
const { getPregunta1 }= require('../controllers/pregunta1.controllers')
const { postPregunta1 }= require('../controllers/pregunta1.controllers')
const { getFamiliayhogar } = require("../controllers/familiayhogar.controller");
const { postFamiliayhogar } = require( "../controllers/familiayhogar.controller");
const router = express.Router();

//defino mis rutas

// RUTA PRINCIPAL

router.get("/", (req, res) =>{
  res.send(` <h1>ACA PON LAS RUTAS QUE TENEMOS </h1> 
  CLICKEA CUALQUIERA :v 
  <a href="http://localhost:3000/datospersonales">DATOS PERSONALES</a>
  <a href="http://localhost:3000/familia">FAMILIA Y HOGAR</a>
  `)
})


// DATOS PERSONALES
router.get("/datospersonales", getPregunta1)
router.post("/datospersonales",postPregunta1)

// FAMILIA Y HOGAR 

router.get("/familia", getFamiliayhogar)
router.post("/familia",postFamiliayhogar)

module.exports = router
;
