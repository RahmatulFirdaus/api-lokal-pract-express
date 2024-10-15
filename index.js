const express = require('express');
const mysql = require('mysql2');
const app = express();
const IP = "localhost";
const PORT = 3000;



/**SESI 1 : GET Mengambil / menampilkan*/
// app.get('/', (req, res) => {
//     res.send('Subsitusi /users untuk melihat implementasi get lainnya');
// });

// app.get('/users', (req, res) => {
//     res.send('Implementasi get users');
// });

// app.get('/search', (req, res) => {
//     //variabel ini berlaku jika penambahan /search?keyword=......isi sendiri
//     const keyword = req.query.keyword;
//     res.send(`Hasil pencarian untuk: ${keyword}`);
// });

/**========= SESI 2 : POST Mengirimkan */

// app.use(express.json()); //middleware untuk mengubah atau memparsing dari JSON ke object javascript
// app.use(express.urlencoded({ extended: true })); //mengubah atau memparsing dari html ke JSON

// app.get('/', (req, res) => {
//     res.send('Subsitusi /users untuk melihat implementasi get lainnya');
// });

// //route yang menangani request POST ke URL /users.
// app.post('/users', (req, res) => {
//     const {nama, email} = req.body;
//     res.send(`user created: ${nama} and ${email}`);
// });


/**SESI 3 : POST namun tambahan validasi */
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/users', (req, res) => {
//     const {nama, email} = req.body;
//     //validasi
//     if (!nama || !email) {
//         //status 400 = error bad request, jadi ketika nama atau email tidak diisi, maka akan menampilkan validasi dibawah
//         return res.status(400).send('diisi bang nama ama emailnya :)');
//     }
//     res.send(`user created: ${nama} and ${email}`);
// });


/**SESI 4 : Latihan */
//buatlah endpoint /books, lalu tambahkan body JSON yang berisi judul buku dan penulisnya. Jika berhasil, tampilkan judul buku dan penulisnya

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/book', (req, res) => {
//     const {judul, penulis} = req.body;
//     if (!judul || !penulis) {
//         return res.status(400).send('diisi bang judul ama penulisnya :)');
//     }
//     res.send(`judul buku: ${judul}, dan penulisnya : ${penulis}`);
// });


/**SESI 5 : Latihan */
//sama seperti sesi 4, namun data yang dikirimkan harus dalam bentuk array. Jika berhasil, tampilkan judul buku dan penulisnya

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// let books = [];

// app.post('/books', (req, res) => {
//     const {judul, penulis} = req.body;
//     if (!judul || !penulis) {
//         return res.status(500).send('diisi bang judul ama penulisnya :)');
//     }
//     const newBook = {judul, penulis}; //menampung data dalam bentuk object
//     books.push(newBook);//mengisi data ke dalam array variabel books

//     res.send(`judul buku: ${judul}, dan penulisnya : ${penulis}`);
// });

// app.get('/books', (req, res) => {
//     res.send(books);
// }
// );


/**SESI 6 : Implementasi get post ke database */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books'
});

app.post('/books', (req, res) => {
    const { judul, penulis } = req.body;
    if (!judul || !penulis) {
        return res.status(400).json('Diisi bang judul ama penulisnya :)');
    }
    const query = 'INSERT INTO buku (judul, penulis) VALUES (?, ?)';
    connection.query(query, [judul, penulis]);
});

app.get('/books', (req, res) => {
    const query = 'SELECT * FROM buku';
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).send('Terjadi kesalahan pada server'+err);
        }
        return res.json(result);
    })
});

app.listen(PORT,() => {
    console.log(`Server running on http://${IP}:${PORT}`);
})