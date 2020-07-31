const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const ProductsRouter = require('./Products.router');
const Healthcheck = require('./healthcheck');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use('/products', ProductsRouter);
router.use('/healthcheck', Healthcheck);

module.exports = router;
