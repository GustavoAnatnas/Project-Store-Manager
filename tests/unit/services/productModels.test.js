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
        "name": "Martelo de Thor", }]
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
  });


  it('Verifica se o retorno da requisição "getById" é um array', async function () {
    const result = []
    sinon.stub(connection, 'execute').resolves([result]);

    const resultado = await ProductModel.getById();

    expect(resultado).to.be.an('array');
  });
  it('Verifica se o retorno da requisição "getById" é um array vazio', async function () {
    const result = []
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
  it('Verifica se as keys do Objeto são válidas', async () => {
    const result = [{
      "id": 1,
      "name": "Martelo de Thor",
    }]
    sinon.stub(connection, 'execute').resolves([result]);

    const [resultado] = await ProductModel.getById();

    expect(resultado).to.be.an('object');
    expect(resultado).to.all.keys('name', 'id')
  })
});