const express = require('express');
const productsControllers = require('./controllers/productsControllers');

const app = express();

app.use(express.json());

app.get('/products', productsControllers.getAll);

app.get('/products/:id', productsControllers.getById);

app.post('/products', productsControllers.createNewProduct);

// não remova esse endpoint, é para o avaliador funciona
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;