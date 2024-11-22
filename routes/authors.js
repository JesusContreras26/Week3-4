const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');
const validator = require('../middleware/validator');

router.get('/', authorsController.getAll);
router.get('/:id', authorsController.getAuthorById);
router.get('/:id/books', authorsController.getAuthorBooks);
router.post(
  '/',
  validator.authorRules(),
  validator.checkAuthorBookData,
  authorsController.addNewAuthor
);
router.put(
  '/:id',
  validator.authorRules(),
  validator.checkAuthorBookData,
  authorsController.updateAuthorInfo
);
router.delete('/:id', authorsController.deleteAuthor);

module.exports = router;
