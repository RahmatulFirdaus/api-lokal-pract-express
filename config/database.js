var mysql = require('mysql2');

const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'books',
});

module.exports = dbPool.promise(); //promise karena dbpool bersifat asyncronus