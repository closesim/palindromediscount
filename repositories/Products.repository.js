const ProductsRepository = module.exports;

const ProductModel = require('../models/Products.model');

ProductsRepository.getById = (id) => ProductModel.find({ id }).exec();
