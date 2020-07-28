const ProductsService = module.exports;
const { checkTextForPal } = require('../utils/palindrome.util');

const DEFAULT_DISCOUNT = 50;

ProductsService.checkProdsForPal = (productArray) => productArray.map((product) => {
  const { brand, description } = product;
  if (checkTextForPal(brand) || checkTextForPal(description)) {
    return { discount: DEFAULT_DISCOUNT, ...product };
  }
  return product;
});
