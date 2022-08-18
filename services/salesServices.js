const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  if (!sales) return { code: 404, message: 'Sale not found' };
  return { code: 200, sales };
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  if (!sale || sale.length === 0) return { code: 404, message: 'Sale not found' };
  return { code: 200, sale };
};

module.exports = {
  getAll,
  getById,
};