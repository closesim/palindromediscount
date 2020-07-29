const router = require('express').Router();

const ProductsRouter = require('./Products.router');
const Healthcheck = require('./healthcheck');

router.use('/products', ProductsRouter);
router.use('/healthcheck', Healthcheck);

module.exports = router;
