const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //importando rota do arquivo routes

const app = express();

app.use(cors()); //Permite que todas as aplicações frontend possam acessar o backend

/* Métodos HTTP:
 *
 * GET: Buscar/Listar uma informação do Back-end
 * POST: Cria uma informação no Back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

app.use(express.json());
app.use(routes); //usando a rota exportada.

app.listen(3333);