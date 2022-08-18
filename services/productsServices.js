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

const updateProduct = async (id, name) => {
  const product = await productModels.updateProduct(id, name);
  if (!product) return { code: 404, message: 'Product not found' };
  return { code: 200, product };
};

const deleteProduct = async (id) => {
  await productModels.deleteProduct(id);
};  

module.exports = {
  getAll,
  getById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};