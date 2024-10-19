const express = require('express');
const router = express.Router();
const bookController = require('../controller/book');

//create
router.post('/', bookController.postBook);
router.post('/user', bookController.postUser);

//read
router.get('/', bookController.getBook);
router.get('/detail/:idBuku', bookController.getBookById);
router.get('/user', bookController.getUser);
router.get('/user/detail/:idUser', bookController.getUserById);

//update
/**untuk update, kita harus sertakan id untuk menjadi patokan atau acuan */
router.patch('/:idBuku', bookController.updateBook);
router.patch('/user/:idUser', bookController.updateUser);

//delete
router.delete('/:idBuku', bookController.deleteBook);


module.exports = router;