const salesServices = require('../services/salesServices');

const getAll = async (_req, res) => {
  const { sales, message, code } = await salesServices.getAll();
  if (!sales) return res.status(code).json({ message });
  return res.status(code).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { sale, message, code } = await salesServices.getById(id);
  if (!sale) return res.status(code).json({ message });
  res.status(code).json(sale);
};

module.exports = {
  getAll,
  getById,
};