const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const validator = require('../middleware/validator');
const { isAuthenTicated } = require('../middleware/authenticate');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getSingleBook);
router.post(
  '/',
  isAuthenTicated,
  validator.bookRules(),
  validator.checkAuthorBookData,
  bookController.createBook
);
router.put(
  '/:id',
  isAuthenTicated,
  validator.bookRules(),
  validator.checkAuthorBookData,
  bookController.updateBook
);
router.delete('/:id', isAuthenTicated, bookController.deleteBook);

module.exports = router;
