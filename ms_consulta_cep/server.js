const express = require('express');
const bodyParser = require('body-parser');
const logger = require("npmlog");

const route = require('./routes/CepRoute')

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(route);

app.listen(3000, () => {
    logger.info("Server running!")
});