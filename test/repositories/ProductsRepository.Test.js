const assert = require('assert');
require('../../index');

const ProductsRepository = require('../../repositories/Products.repository');

describe('Product Repository Test', () => {
  it('Should get product by id', async () => {
    const ID = 1;
    const [{ id }] = await ProductsRepository.getById(ID);
    assert.equal(id, ID);
  });
});
