const productsServices = require('../services/productsServices');

const getAll = async (_req, res) => {
  const { products, message, code } = await productsServices.getAll();
  if (!products) return res.status(code).json({ message });
  return res.status(code).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { product, message, code } = await productsServices.getById(id);
  if (!product) return res.status(code).json({ message });
  res.status(code).json(product);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const { product, code } = await productsServices.createNewProduct(name);
  res.status(code).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { product, message, code } = await productsServices.updateProduct(id, name);
  if (!product) return res.status(code).json({ message });
  res.status(code).json(product);
};

module.exports = {
  getAll,
  getById,
  createNewProduct,
  updateProduct,
};
