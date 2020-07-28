const ProductsRepository = module.exports;

const ProductModel = require('../models/Products.model');

ProductsRepository.getById = (id) => ProductModel.find({ id }).exec();

ProductsRepository.findProduct = (term) => ProductModel.find(
  {
    $or: [
      { brand: { $regex: `.*${term}.*` } },
      { description: { $regex: `.*${term}.*` } },
    ],
  },
).exec();
