const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const ProductModel = require('../../../models/productsModel');

describe('ProductModel', () => {
  describe('Retornou o esperado', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('Verifica se o retorno da requisição "getAll" é um array', async function () {
      const result = []
      sinon.stub(connection, 'execute').resolves([result]);

      const resultado = await ProductModel.getAll();

      expect(resultado).to.be.an('array');
    });
    it('Verifica se o retorno da requisição "getAll" é um array vazio', async function () {
      const result = []
      sinon.stub(connection, 'execute').resolves([result]);

      const resultado = await ProductModel.getAll();

      expect(resultado).to.be.empty;
    });
    it('Verifica se o retorno é um array com um produto', async () => {
      const result = [{
        "id": 1,
        "name": "Martelo de Thor",
      }]
      sinon.stub(connection, 'execute').resolves([result]);

      const resultado = await ProductModel.getAll();

      expect(resultado).to.be.not.empty;
    })
    it('Verifica se as keys do Objeto são válidas', async () => {
      const result = [{
        "id": 1,
        "name": "Martelo de Thor",
      }]
      sinon.stub(connection, 'execute').resolves([result]);

      const [resultado] = await ProductModel.getAll();

      expect(resultado).to.be.an('object');
      expect(resultado).to.all.keys('name', 'id')
    })


    it('Verifica se o retorno da requisição "getById" é um objeto', async function () {
      const result = [{}]
      sinon.stub(connection, 'execute').resolves([result]);

      const resultado = await ProductModel.getById();

      expect(resultado).to.be.an('object');
    });
    it('Verifica se o retorno da requisição "getById" é um objeto vazio', async function () {
      const result = [{}]
      sinon.stub(connection, 'execute').resolves([result]);

      const resultado = await ProductModel.getById();

      expect(resultado).to.be.empty;
    });
    it('Verifica se o retorno é um array com um produto', async () => {
      const result = [{
        "id": 1,
        "name": "Martelo de Thor",
      }]
      sinon.stub(connection, 'execute').resolves([result]);

      const resultado = await ProductModel.getById();

      expect(resultado).to.be.not.empty;
    })
    it('Cria um produto', async () => {
      sinon.stub(connection, 'execute').resolves([{
        "id": 1,
        "name": "Martelo de Thor",
}]);
      const resultado = await ProductModel.createNewProduct();
      expect(resultado).to.be.not.empty;
    })

    it('Atualiza um produto', async () => {
      sinon.stub(connection, 'execute').resolves();
      const resultado = await ProductModel.updateProduct( 1, "Martelo do Thor");
      expect(resultado.name).to.be.equal('Martelo do Thor');
    })

    it('Deleta um produto', async () => {
      sinon.stub(connection, 'execute').resolves();
      await ProductModel.deleteProduct(1);
  })
  });
});