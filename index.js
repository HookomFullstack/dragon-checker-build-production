const { tipo, productoPersonalizado, tortaPersonalizada } = require('./config/config');

const axios = require('axios').default;

axios.post('http://localhost:3000/',
{
    tipo,
    productoPersonalizado,
    tortaPersonalizada
})