const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "P@ss!@#",
    host: "192.168.180.14",
    port: 5432,
    database: "itdb"
});

module.exports = pool;
