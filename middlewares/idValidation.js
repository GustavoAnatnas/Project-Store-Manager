const productModel = require('../models/productsModel');

const idValidation = async (req, res, next) => {
  const { id } = req.params;
  const dbId = await productModel.getAll();
  const check = dbId.find((product) => Number(product.id) === Number(id));
  if (!check) return res.status(404).json({ message: 'Product not found' });
  next();
};

module.exports = { idValidation };