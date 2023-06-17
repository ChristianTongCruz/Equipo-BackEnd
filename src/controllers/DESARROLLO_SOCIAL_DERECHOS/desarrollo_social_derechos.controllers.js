const pool = require("../../../database/db.js");

const getdesarrollosocialderechos = async (req, res) => {
  const [resultado] = await pool.query(
    "select *from desarrollo_social_derechos"
  );
  res.json(resultado);
};
const getdesarrollosocialderechosbyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "SELECT *FROM desarrollo_social_derechos WHERE id_desarrollo_social_derechos =?",
    [id]
  );
  res.json(resultado);
};

const postdesarrollo_social_derechos = async (req, res) => {
  const {
    localidad_cuenta_instituciones_salud_bienestar,
    organizacion_social_localidad,
    conoce_funciones_alcalde_ccpp_las_palmas,
    problemas_localidad,
    manera_solucionar_problemas,
    comunidad_cinco_anos,
    pertenece_orgranizacion_social_comuna_deporte_religiosa,
    organizacion_social_comunal_cumple_plan_trabajo,
    asistieron_faena_comunal,
  } = req.body;
  try {
    await pool.query(
      "INSERT INTO desarrollo_social_derechos (localidad_cuenta_instituciones_salud_bienestar,organizacion_social_localidad,conoce_funciones_alcalde_ccpp_las_palmas,problemas_localidad,manera_solucionar_problemas,comunidad_cinco_anos,pertenece_orgranizacion_social_comuna_deporte_religiosa,organizacion_social_comunal_cumple_plan_trabajo,asistieron_faena_comunal) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        localidad_cuenta_instituciones_salud_bienestar,
        organizacion_social_localidad,
        conoce_funciones_alcalde_ccpp_las_palmas,
        problemas_localidad,
        manera_solucionar_problemas,
        comunidad_cinco_anos,
        pertenece_orgranizacion_social_comuna_deporte_religiosa,
        organizacion_social_comunal_cumple_plan_trabajo,
        asistieron_faena_comunal,
      ]
    );
    res.send("EXITO AL INGRESAR A LA BASE DE DATOS");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getdesarrollosocialderechos,
  getdesarrollosocialderechosbyid,
  postdesarrollo_social_derechos,
};
