const productModels = require('../models/productsModel');

const getAll = async () => {
  const products = await productModels.getAll();
  if (!products) return { code: 404, message: 'Products not found' };
  return { code: 200, products };
};

const getById = async (id) => {
  const product = await productModels.getById(id);
  if (!product) return { code: 404, message: 'Product not found' };
  return { code: 200, product };
};

const createNewProduct = async (name) => {
  const product = await productModels.createNewProduct(name);
  return { code: 201, product };
};

module.exports = {
  getAll,
  getById,
  createNewProduct,
};