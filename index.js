const { server } = require('./build');
const { tipo, productoPersonalizado } = require('./config/config');
const axios = require('axios').default;

server().then(e => axios.post(`http://localhost:${e}/`, {tipo,productoPersonalizado}) )