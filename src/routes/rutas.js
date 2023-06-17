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
const {
  getActividadeseconomicas,
  getActividadeseconomicasbyid,
  postActividadeseconomicas,
} = require("../controllers/ACTIVIDADES_ECONOMICAS_PRODUCTIVAS/activiadesEconomi.controller.js");
const {
  getdesarrollosocialderechos,
  getdesarrollosocialderechosbyid,
  postdesarrollo_social_derechos,
} = require("../controllers/DESARROLLO_SOCIAL_DERECHOS/desarrollo_social_derechos.controllers.js");
const {
  informacionturistico,
  informacionturisticabyid,
  postinformacionturistica,
} = require("../controllers/INFORMACION_TURISTICO_CULTURAL/informacion_turistico.controller.js");
const {
  ecologiamedio,
  ecologiamediobyid,
  postecologiamedio,
} = require("../controllers/ECOLOGIA_MEDIO_AMBIENTE/ecologia_medio.controller.js");
const {
  getaspectostecnologicos,
} = require("../controllers/ASPECTOS_TECNOLOGIAS_DE_INFORMACION/aspectos_tencologias.controllers.js");
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
// VI ACTIVIDADES ECONOMICAS  Y/O PRODUCTIVAS
router.get("/actividadeseconomicas", getActividadeseconomicas);
router.get("/actividadeseconomicas/:id", getActividadeseconomicasbyid);
router.post("/actividadeseconomicas", postActividadeseconomicas);
// VII DESARROLLO SOCIAL Y DERECHOS
router.get("/desarrollosocial", getdesarrollosocialderechos);
router.get("/desarrollosocial/:id", getdesarrollosocialderechosbyid);
router.post("/desarrollosocial", postdesarrollo_social_derechos);
//VIII  INFORMACION TURISTICA Y CULTURAL
router.get("/informacionturistica", informacionturistico);
router.get("/informacionturistica/:id", informacionturisticabyid);
router.post("/informacionturistica", postinformacionturistica);
//IX ECOLOGIA Y MEDIO AMBIENTE
router.get("/ecologiamedio", ecologiamedio);
router.get("/ecologiamedio/:id", ecologiamediobyid);
router.post("/ecologiamedio", postecologiamedio);
//X ASPECTOS DE TECNOLOGIAS DE LA INFORMACION Y COMUNICACION
router.get("/aspectostec", getaspectostecnologicos);
router.get("/aspectostec/:id", getActividadeseconomicasbyid);
router.post("/aspectostec", postActividadeseconomicas);

module.exports = router;
