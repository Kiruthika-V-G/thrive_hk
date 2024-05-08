const { Pool } = require('pg'); 

const pool = new Pool({
  user: "postgres",
  //password: "NITISHKRISHNA@123",
  password : "Ragavendra2004*",
  host: "localhost",
  port: 5432,
  database: "hospital",
});

module.exports = pool;


