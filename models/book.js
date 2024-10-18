const dbPool = require('../config/database');

const getAllBook = () => {
    const SQLQuery = 'SELECT * FROM buku';
    //untuk mengeksekusi sql query
    return dbPool.execute(SQLQuery);
    
}
module.exports = {
    getAllBook
}