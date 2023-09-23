const routes = require('express').Router();

const baseController = require('../controllers');

routes.get('/professional', baseController.getDataForFrontend);

module.exports = routes;