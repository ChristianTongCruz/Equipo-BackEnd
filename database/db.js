const { createPool } = require("mysql2/promise"); // o 'mysql' si prefieres

// Crea el pool de conexiones
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "basepalmas",
});
// Exporta el pool para que pueda ser utilizado desde otros módulos
module.exports = pool;
