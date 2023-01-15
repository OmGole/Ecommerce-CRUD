const express = require('express');
const router = express.Router();


const {getAllBooks,createBook,getSingleBook,updateBook,deleteBook} = require('../controllers/books');

router.route('/').get(getAllBooks).post(createBook);
router.route('/:id').get(getSingleBook).patch(updateBook).delete(deleteBook);

module.exports = router;