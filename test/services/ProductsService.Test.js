const assert = require('assert');
const sandbox = require('sinon').createSandbox();
const { applyDiscountforPalProds, search } = require('../../services/Products.service');
const ProductsTestData = require('./test_data/ProductsTestData');
const ProductsRepository = require('../../repositories/Products.repository');
const ProductsService = require('../../services/Products.service');

describe('Products Service Test Cases', () => {
  beforeEach(() => {
    sandbox.stub(ProductsRepository, 'getById').resolves([ProductsTestData.products[0]]);
    sandbox.stub(ProductsRepository, 'findProduct').resolves(ProductsTestData.products);
    sandbox.spy(ProductsService, 'applyDiscountforPalProds');
    sandbox.spy(ProductsService, 'applyDiscount');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should be discounted for palindromes in products details', () => {
    const products = applyDiscountforPalProds(ProductsTestData.products);
    assert.equal(products.length, 2);
    products.forEach((product) => {
      assert(product.discount);
      assert.equal(product.discount, 50);
    });
  });

  it('Should search by id in term', async () => {
    const products = await search('1');
    assert(ProductsService.applyDiscount.notCalled);
    assert.equal(products.length, 1);
    products.forEach((product) => {
      assert(product.discount);
      assert.equal(product.discount, 50);
    });
  });

  it('Should search by term', async () => {
    const products = await search('abba');
    assert(ProductsService.applyDiscountforPalProds.notCalled);
    assert.equal(products.length, 2);
    products.forEach((product) => {
      assert(product.discount);
      assert.equal(product.discount, 50);
    });
  });
});
