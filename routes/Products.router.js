const router = require('express').Router();

const ProductsController = require('../controllers/Products.controller');

router.get('/search', ProductsController.search);

module.exports = router;
