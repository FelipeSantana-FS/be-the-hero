const express = require('express'); //importando express
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router(); 
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); //Jogando dados na tabela ongs

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; //exportando rotas para serem executadas no index.js
