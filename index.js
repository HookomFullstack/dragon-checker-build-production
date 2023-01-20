const { server } = require('./build');
const { tipo, productoPersonalizado, tortaPersonalizada } = require('./config/config');

const axios = require('axios').default;
server()
axios.post('http://localhost:3000/',
{
    tipo,
    productoPersonalizado,
    tortaPersonalizada
})