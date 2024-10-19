const dbPool = require('../config/database');

//mengambil data dari tabel buku
const getAllBook = () => {
    const SQLQuery = 'SELECT * FROM buku';
    //untuk mengeksekusi sql query
    return dbPool.execute(SQLQuery);
}

//mengambil data dari tabel buku berdasarkan id
const getBookById = (idBuku) => {
    const SQLQuery = `SELECT * FROM buku WHERE id=${idBuku}`;
    return dbPool.execute(SQLQuery);
}

//mengambil data dari tabel user
const getAllUser =()=>{
    const SQLQuery = 'SELECT * FROM user';
    return dbPool.execute(SQLQuery);
}

//mengambil data dari tabel user berdasarkan id
const getUserById = (idUser) => {
    const SQLQuery = `SELECT * FROM user WHERE id=${idUser}`;
    return dbPool.execute(SQLQuery);
}

//menambahkan data ke tabel buku
const postBook = (body) => {
    const SQLQuery = `INSERT INTO buku (judul, penulis) VALUES ('${body.judul}', '${body.penulis}')`;
    
    return dbPool.execute(SQLQuery);
}

//menambahkan data ke tabel user
const postUser = (body) => {
    const SQLQuery = `INSERT INTO user (username, password) VALUES ('${body.username}', '${body.password}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateBook = (body, idBuku) => {
    const SQLQuery = `UPDATE buku SET judul='${body.judul}', penulis='${body.penulis}' WHERE id=${idBuku}`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE user SET username='${body.username}', password='${body.password}' WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const deleteBook = (idBuku) => {
    const SQLQuery = `DELETE FROM buku WHERE id=${idBuku}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllBook,
    getAllUser,
    getUserById,
    getBookById,
    postBook,
    postUser,
    updateBook,
    updateUser,
    deleteBook
}