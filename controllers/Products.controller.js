const ProductsController = module.exports;

const ProductServices = require('../services/Products.service');

ProductsController.search = (req, res, next) => {
  const { query: { term } } = req;

  if (!term) {
    return res.status(400).send('No search term received');
  }

  return ProductServices.search(term).then((data) => {
    res.send(data);
  }).catch(next);
};
