const routes = require('express').Router();
const Controller = require('./controller');

routes.get('/', Controller.version);

module.exports = routes;