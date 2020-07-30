const ProductsService = module.exports;
const { checkTextForPal } = require('../utils/palindrome.util');
const ProductsRepository = require('../repositories/Products.repository');

const DEFAULT_DISCOUNT = 50;
const MIN_TERM_LENGTH = 3;

ProductsService.applyDiscountforPalProds = (productArray) => productArray.map((product) => {
  const { brand, description } = product;
  if (checkTextForPal(brand) || checkTextForPal(description)) {
    return { discount: DEFAULT_DISCOUNT, ...product };
  }
  return product;
});

ProductsService.applyDiscount = (productArray) => productArray
  .map((product) => ({ discount: DEFAULT_DISCOUNT, ...product }));

ProductsService.search = async (term) => {
  let result;
  if (!Number.isNaN(Number.parseInt(term, 10))) {
    result = await ProductsRepository.getById(term);
    return ProductsService.applyDiscountforPalProds(result);
  }
  if (term.length < MIN_TERM_LENGTH) return [];
  result = await ProductsRepository.findProduct(term);
  if (checkTextForPal(term)) return ProductsService.applyDiscount(result);

  return result;
};
