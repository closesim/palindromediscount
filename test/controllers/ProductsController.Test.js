const chai = require('chai');
const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const chaiHttp = require('chai-http');
const app = require('../../index');
const ProductsRepository = require('../../repositories/Products.repository');
const ProductsTestData = require('../services/test_data/ProductsTestData');
const { API_BASE } = require('../../configs/app');

chai.use(chaiHttp);

describe('Products Controller Test', () => {
  beforeEach(() => {
    sandbox.stub(ProductsRepository, 'getById').resolves([ProductsTestData.products[0]]);
    sandbox.stub(ProductsRepository, 'findProduct').resolves(ProductsTestData.products);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should return 1 product with discount', () => {
    const TERM = '1';
    return chai
      .request(app)
      .get(`${API_BASE}/products/search`)
      .query({ term: TERM })
      .then(({ status, body }) => {
        assert.equal(status, 200);
        assert.equal(body.length, 1);
        assert.equal(body[0].discount, 50);
      });
  });

  it('Should return 2 products with discount using text', () => {
    const TERM = 'abba';
    return chai
      .request(app)
      .get(`${API_BASE}/products/search`)
      .query({ term: TERM })
      .then(({ status, body }) => {
        assert.equal(status, 200);
        assert.equal(body.length, 2);
        body.forEach((product) => {
          assert(product.discount);
          assert.equal(product.discount, 50);
        });
      });
  });

  it('Should return no products because search term is too short', () => {
    const TERM = 'ab';
    return chai
      .request(app)
      .get(`${API_BASE}/products/search`)
      .query({ term: TERM })
      .then(({ status, body }) => {
        assert.equal(status, 200);
        assert.equal(body.length, 0);
      });
  });

  it('Should respond 400 for no term query', () => chai
    .request(app)
    .get(`${API_BASE}/products/search`)
    .then(({ status }) => {
      assert.equal(status, 400);
    }));
});
