const express = require("express");
const {
  getdatospersonales,
  getdatospersonalesbyid,
  postdatospersonales,
} = require("../controllers/DATOS_PERSONALES/datospersonales.controllers.js");
const {
  getFamilia,
  getFamiliabyid,
  postfamiliavivienda,
} = require("../controllers/FAMILIA _VIVIENDA/familia.controller.js");
const {
  getVivienda,
  getViviendabyid,
  postvivienda,
} = require("../controllers/FAMILIA _VIVIENDA/vivienda.controller.js");
const {
  getEducacion,
  getEducacionbyid,
  postEducacion,
} = require("../controllers/EDUCACION/educacion.controller.js");
const {
  getComunitrafa,
  postComuintrafa,
  getComunitrafabyid,
} = require("../controllers/COMUNICACION INTRAFAMILIAR/comuintrafa.controller.js");
const {
  getmediocom,
  getmediocombyid,
  postmedioscom,
} = require("../controllers/MEDIOS DE COMUNICACION/medioscom.controller.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`AQUI DEBERIA ESTAR TU INDEX`);
});

//I.DATOS PERSONALES
router.get("/datospersonales", getdatospersonales);
router.get("/datospersonales/:id", getdatospersonalesbyid);
router.post("/datospersonales", postdatospersonales);
//II.FAMILIA
router.get("/familia", getFamilia);
router.get("/familia/:id", getFamiliabyid);
router.post("/familia", postfamiliavivienda);
//II.1.VIVIENDA
router.get("/vivienda", getVivienda);
router.get("/vivienda/:id", getViviendabyid);
router.post("vivienda", postvivienda);
///III.EDUCACUON
router.get("/educacion", getEducacion);
router.get("/educacion/:id", getEducacionbyid);
router.post("/educacion", postEducacion);
///IV.COMUNICACION INTRAFAMILIAR
router.get("/intrafamiliar", getComunitrafa);
router.get("/intrafamiliar/:id", getComunitrafabyid);
router.post("/intrafamiliar", postComuintrafa);
///V.MEDIOS DE COMUNICACION
router.get("/medioscom", getmediocom);
router.get("/medioscom/:id", getmediocombyid);
router.post("/medioscom", postmedioscom);
module.exports = router;
