const assert = require('assert');
require('../../index');

const ProductsRepository = require('../../repositories/Products.repository');

describe.skip('Product Repository Test', () => {
  it('Should get product by id', async () => {
    const ID = 1;
    const [{ id }] = await ProductsRepository.getById(ID);
    assert.equal(id, ID);
  });

  it('Should search by term in brand and description', async () => {
    const TERM = 'cxzbz';
    const result = await ProductsRepository.findProduct(TERM);
    result.forEach(({ description, brand }) => {
      assert(description.includes(TERM) || brand.includes(TERM));
    });
  });
});
