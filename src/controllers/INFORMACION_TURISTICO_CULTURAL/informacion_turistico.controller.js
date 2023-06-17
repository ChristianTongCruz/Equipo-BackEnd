const pool = require("../../../database/db.js");

const informacionturistico = async (req, res) => {
  const [resultado] = await pool.query(
    "SELECT *FROM informacion_turistica_cultural "
  );
  res.json(resultado);
};
const informacionturisticabyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "SELECT *FROM informacion_turistica_cultural WHERE id_informacion_turistica_cultural=?",
    [id]
  );
  res.json(resultado);
};
const postinformacionturistica = async (req, res) => {
  const {
    lugares_turisticos_comunidad,
    vias_acceso_turisticos_condiciones_adecuadas,
    fiestas_tradicionales_comunidad,
    necesita_capacitarse_actividades_turisticas,
    procede_turistas_visitan,
    servicio_localidad_recibir_turistas,
    meses_ano_afluencia_ccpp_las_palmas,
  } = req.body;
  try {
    const [resultado] = await pool.query(
      "INSERT INTO informacion_turistica_cultural (lugares_turisticos_comunidad,vias_acceso_turisticos_condiciones_adecuadas,fiestas_tradicionales_comunidad,necesita_capacitarse_actividades_turisticas,procede_turistas_visitan,servicio_localidad_recibir_turistas,meses_ano_afluencia_ccpp_las_palmas) VALUES (?,?,?,?,?,?,?)",
      [
        lugares_turisticos_comunidad,
        vias_acceso_turisticos_condiciones_adecuadas,
        fiestas_tradicionales_comunidad,
        necesita_capacitarse_actividades_turisticas,
        procede_turistas_visitan,
        servicio_localidad_recibir_turistas,
        meses_ano_afluencia_ccpp_las_palmas,
      ]
    );
    res.send("EXITOS AL INGRESAR A LA BASE DE DATOS");
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  informacionturistico,
  informacionturisticabyid,
  postinformacionturistica,
};
