const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(routes);

app.get('/testes/:idUsuario?', (req, res) => {
    console.log(req.query)
    res.send(req.params.idUsuario)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("recebi")
})

app.listen(3000, () => {
    console.log("Server running")
    console.log("Acessar http://localhost:3000")
});