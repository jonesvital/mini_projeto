const express = require('express');
const logger = require("npmlog");
const cepController = require('../controllers/CepController')

const route = express.Router();

route.get('/find/:cep', cepController.getCep)

module.exports = route