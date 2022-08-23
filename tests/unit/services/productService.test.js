const { expect } = require('chai');
const sinon = require('sinon');
const ProductModel = require('../../../models/productsModel');
const ProductServices = require('../../../services/productsServices');

describe('ProductServices', () => {
  describe('Retornou o esperado', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('Verifica se o retorno é um array com um produto', async () => {
      const result = [{
        "id": 1,
        "name": "Martelo de Thor",
      }]
      sinon.stub(ProductModel, "getAll").resolves([result]);

      const resultado = await ProductServices.getAll();

      expect(resultado).to.be.not.empty;
    })
    it('Verifica se o retorno da requisição "getById" é um objeto', async function () {
      const result = [{}]
      sinon.stub(ProductModel, "getById").resolves([result]);

      const resultado = await ProductServices.getById();

      expect(resultado).to.be.an('object');
    });

    it('Verifica se o retorno é um array com um produto', async () => {
      const result = [{
        "id": 1,
        "name": "Martelo de Thor",
      }]
      sinon.stub(ProductModel, "getById").resolves([result]);

      const resultado = await ProductServices.getById();

      expect(resultado).to.be.not.empty;
    })

    it('Cria um produto', async () => {
      sinon.stub(ProductModel, "createNewProduct").resolves([{
        "id": 1,
        "name": "Martelo de Thor",
      }]);
      const resultado = await ProductServices.createNewProduct();
      expect(resultado).to.be.not.empty;
    })

    it('Atualiza um produto', async () => {
      sinon.stub(ProductModel, "updateProduct").resolves( 1, "Martelo do Thor");
      const resultado = await ProductServices.updateProduct();
      expect(resultado).to.be.not.empty;

    })

    it('Deleta um produto', async () => {
      sinon.stub(ProductModel, "deleteProduct").resolves();
      await ProductServices.deleteProduct(1);
    })
  })
});