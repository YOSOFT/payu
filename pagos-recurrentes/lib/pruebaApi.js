var base64 = require('./base64');
var Cliente = require('./cliente');
var config = require('./config');

var cliente = new Cliente();
cliente.consultaCliente("54ec7fa7905");

console.log(base64.encode64("fe01d046ab43905:1c1rf5l96kbj3j6h1lm37vh6gc"));
console.log("configuracion",base64.encode64(`${config.apilogin}:${config.apikey}`));