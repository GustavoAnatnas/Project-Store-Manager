const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection
    .execute(
      `SELECT sale.id AS saleId, sale.date, slpr.product_id AS productId, slpr.quantity
        FROM StoreManager.sales AS sale
        INNER JOIN StoreManager.sales_products AS slpr 
        ON sale.id = slpr.sale_id
        ORDER BY saleId, productId`,
    );
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection
    .execute(`SELECT sale.date, slpr.product_id AS productId, slpr.quantity
        FROM StoreManager.sales AS sale
        INNER JOIN StoreManager.sales_products AS slpr 
        ON sale.id = slpr.sale_id
        WHERE sale.id= ?
        ORDER BY sale_id, productId`, [id]);
  return sale;
};

module.exports = {
  getAll,
  getById,
};