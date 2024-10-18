var mysql = require('mysql2');
require('dotenv').config(); //tambahkan library dotenv npm install dotenv

const dbPool = mysql.createPool({
  //karena data ini sangat dirahasiakan, maka buat variabel untuk host, user, password, dan database di env
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = dbPool.promise(); //promise karena dbpool bersifat asyncronus