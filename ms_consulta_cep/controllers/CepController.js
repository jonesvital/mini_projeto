const logger = require("npmlog");
const {searchOnViaCep, searchOnOpenCep} = require('../services/CepService')

exports.getCep = (req, res) => {
    let cep = req.params.cep
    
    Promise.any([searchOnOpenCep(cep), searchOnViaCep(cep)])
    .then((response) => {
        res.send(response.data)
    })
    .catch((error) => {
        logger.error(error)
    })

}