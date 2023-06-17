const pool = require("../../../database/db.js");

const ecologiamedio = async (req, res) => {
  const [resultado] = await pool.query(
    "SELECT * FROM ecologia_medio_ambiente;"
  );
  res.json(resultado);
};
const ecologiamediobyid = async (req, res) => {
  const { id } = req.params;
  const [resultado] = await pool.query(
    "SELECT * FROM ecologia_medio_ambiente WHERE id_ecologia_medio_ambiente=?;",
    [id]
  );
  res.json(resultado);
};
const postecologiamedio = async (req, res) => {
  const {
    tipo_vegetacion_localidad,
    tipo_fauna_mamiferos,
    tipo_fauna_aves,
    tipo_fauna_peces,
    tipo_fauna_reptiles,
    riachuelos_quebradas_localidad,
    naciente_agua_localidad,
    caza_furtiva_localidad,
    municipalidad_conservacion_medio_ambiente,
    zonas_depredadas_deforestadas_localidad,
    sabe_areas_bosque_protegidas_nacionales_internacionales,
    instituciones_localidad_contribuye_cuidado_medio_ambiente,
  } = req.body;
  try {
    const [resultado] = await pool.query(
      "INSERT INTO ecologia_medio_ambiente (tipo_vegetacion_localidad,tipo_fauna_mamiferos,tipo_fauna_aves,tipo_fauna_peces,tipo_fauna_reptiles,riachuelos_quebradas_localidad,naciente_agua_localidad,caza_furtiva_localidad,municipalidad_conservacion_medio_ambiente,zonas_depredadas_deforestadas_localidad,sabe_areas_bosque_protegidas_nacionales_internacionales,instituciones_localidad_contribuye_cuidado_medio_ambiente) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        tipo_vegetacion_localidad,
        tipo_fauna_mamiferos,
        tipo_fauna_aves,
        tipo_fauna_peces,
        tipo_fauna_reptiles,
        riachuelos_quebradas_localidad,
        naciente_agua_localidad,
        caza_furtiva_localidad,
        municipalidad_conservacion_medio_ambiente,
        zonas_depredadas_deforestadas_localidad,
        sabe_areas_bosque_protegidas_nacionales_internacionales,
        instituciones_localidad_contribuye_cuidado_medio_ambiente,
      ]
    );
    res.send("EXITOS AL INGRESAR A LA BASE DE DATOS");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  ecologiamedio,
  ecologiamediobyid,
  postecologiamedio,
};
