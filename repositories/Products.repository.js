const ProductsRepository = module.exports;

const ProductModel = require('../models/Products.model');

ProductsRepository.getById = (id) => ProductModel.find({ id }).lean().exec();

ProductsRepository.findProduct = (term) => ProductModel.find(
  {
    $or: [
      { brand: { $regex: `.*${term}.*` } },
      { brand: term },
      { description: { $regex: `.*${term}.*` } },
      { description: term },
    ],
  },
).lean().exec();
