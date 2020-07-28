// const assert = require('assert');

const assert = require('assert');
const { checkProdsForPal } = require('../../services/Products.service');
const ProductsTestData = require('./test_data/ProductsTestData');

describe('Palindrome Test Cases', () => {
  it.only('Should be true for abba', () => {
    const products = checkProdsForPal(ProductsTestData.products);
    assert.equal(products.length, 2);
    products.forEach((product) => {
      assert(product.discount);
      assert.equal(product.discount, 50);
    });
  });
});
