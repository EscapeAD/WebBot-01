const routes = require('express').Router();
const Controller = require('./controller');

routes.get('/', Controller.version);
routes.use('/debug', Controller.graphDebug);

module.exports = routes;