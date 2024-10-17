const express = require('express');
const router = express.Router();
const bookController = require('../controller/book');

router.post('/', bookController.postBook);
router.get('/', bookController.getBook);

module.exports = router;