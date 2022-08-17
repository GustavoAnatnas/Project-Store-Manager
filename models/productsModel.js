const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT id, name FROM StoreManager.products');
  return products;
}; 

const getById = async (id) => {
  const [product] = await connection
    .execute('SELECT id, name FROM StoreManager.products WHERE id=?', [id]);
  return product[0];
};

module.exports = {
  getAll,
  getById,
};