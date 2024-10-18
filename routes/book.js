const express = require('express');
const router = express.Router();
const bookController = require('../controller/book');

//create
router.post('/', bookController.postBook);

//read
router.get('/', bookController.getBook);

//update
/**untuk update, kita harus sertakan id untuk menjadi patokan atau acuan */
router.patch('/:id', bookController.updateBook);

//delete
router.delete('/:id', bookController.deleteBook);


module.exports = router;