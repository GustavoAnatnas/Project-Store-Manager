const { expect } = require('chai');
const sinon = require('sinon');
const ProductController = require('../../../controllers/productsControllers');
const ProductServices = require('../../../services/productsServices');

describe('ProductControllers', () => {
  describe('Retornou o esperado', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('retorna array vazio', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const resultExecute = {
        code: 200,
        message: { id: 1, name: 'Martelo de Thor' },
};
      sinon.stub(ProductServices, 'getAll').resolves(resultExecute);

      await ProductController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  })
});
