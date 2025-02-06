const axios = require('axios');
const logger = require("npmlog");

exports.searchOnViaCep = (cep) => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json`)
}

exports.searchOnOpenCep = (cep) => {
    return axios.get(`https://opencep.com/v1/${cep}`)
}