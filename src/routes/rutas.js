const express = require("express");
const {
  getdatospersonales,
  datospersonales,
} = require("../controllers/DATOS_PERSONALES/datospersonales.controllers.js");
const {
  postFamilia,
  getFamilia,
} = require("../controllers/FAMILIA _VIVIENDA/familia.controller.js");
const {
  getVivienda,
  postVivienda,
} = require("../controllers/FAMILIA _VIVIENDA/vivienda.controller.js");
const {
  getEducacion,
  postEducacion,
} = require("../controllers/EDUCACION/educacion.controller.js");
const {
  getComunitrafa,
  postComunitrada,
} = require("../controllers/COMUNICACION INTRAFAMILIAR/comuintrafa.controller.js");
const {
  getmediocom,
  postmediocom,
} = require("../controllers/MEDIOS DE COMUNICACION/medioscom.controller.js");
const router = express.Router();

//defino mis rutas

// RUTA PRINCIPAL

router.get("/", (req, res) => {
  res.send(` <h1>ACA PON LAS RUTAS QUE TENEMOS </h1> 
  CLICKEA CUALQUIERA :v 
  <a href="http://localhost:3000/datospersonales">DATOS PERSONALES</a>
  <a href="http://localhost:3000/familia">FAMILIA Y HOGAR</a>
  `);
});

//I.DATOS PERSONALES
router.get("/datospersonales", getdatospersonales);
router.post("/datospersonales", datospersonales);

//II.FAMILIA

router.get("/familia", getFamilia);
router.post("/familia", postFamilia);
//II.1.VIVIENDA
router.get("/vivienda", getVivienda);
router.post("/vivienda", postVivienda);
///III.EDUCACUON
router.get("/educacion", getEducacion);
router.post("/educacion", postEducacion);
///IV.COMUNICACION INTRAFAMILIAR
router.get("/intrafamiliar", getComunitrafa);
router.post("/intrafamiliar", postComunitrada);
///V.MEDIOS DE COMUNICACION
router.get("/medioscom", getmediocom);
router.post("/medioscom", postmediocom);
module.exports = router;
