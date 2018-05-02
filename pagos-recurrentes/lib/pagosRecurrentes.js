let base64 = require('./base64');
let config = require('./config');
let CargosAdicionales = require('./cargosAdicionales');
let Cliente = require('./cliente');
let Suscripcion = require('./suscripcion');
let TarjetaCredito = require('./tarjetaCredito');

exports = class PagosRecurrentes{
    
    constructor(){
        let _cliente = new Cliente();
    }
    getCliente(){
        return _cliente;
    }

}
