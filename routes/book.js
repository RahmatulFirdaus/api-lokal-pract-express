const express = require('express');
const router = express.Router();
const bookController = require('../controller/book');

router.get('/', bookController.getBook);

module.exports = router;