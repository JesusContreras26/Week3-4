const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const validator = require('../middleware/validator');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getSingleBook);
router.post(
  '/',
  validator.bookRules(),
  validator.checkAuthorBookData,
  bookController.createBook
);
router.put(
  '/:id',
  validator.bookRules(),
  validator.checkAuthorBookData,
  bookController.updateBook
);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
