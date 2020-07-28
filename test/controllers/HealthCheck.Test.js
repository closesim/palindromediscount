const chai = require('chai');
const assert = require('assert');
const chaiHttp = require('chai-http');
const app = require('../../index');

chai.use(chaiHttp);

describe('Healthcheck Test', () => {
  it('Should return 200', () => chai
    .request(app)
    .get('/healthcheck')
    .then(({ status }) => {
      assert.equal(status, 200);
    }));
});
