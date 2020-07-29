const ProductsController = module.exports;

const ProductServices = require('../services/Products.service');

ProductsController.search = (req, res, next) => {
  const { query: { term } } = req;

  return ProductServices.search(term).then((data) => {
    res.send(data);
  }).catch(next);
};
