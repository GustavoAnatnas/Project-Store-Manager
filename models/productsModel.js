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

const createNewProduct = async (name) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products(name) VALUES (?)', [name]);
  return { id: insertId, name };
};

const updateProduct = async (id, name) => {
  await connection.execute('UPDATE StoreManager.products SET name=? WHERE id=?', [name, id]);
  return { name, id };
};

module.exports = {
  getAll,
  getById,
  createNewProduct,
  updateProduct,
};