//Creación de Tarjetas de Crédito
var fetch = require('node-fetch')
module.exports = class TarjetaCredito {

    constructor() { }
    consultaTarjetaCredito(){

        /**
         * Description = Consultar la información de una tarjeta de crédito (Token) dato su identificador.
         * @method consultaTarjetaCredito
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/creditCards/54ec7fa7905
         * @return {"id":"69e0bnz828w","fullName":"Pedro E. Perez","email":"pperez@payulatam.com","creditCards":[{"token":"d7fe8762-cb4f-4ca8-9081-ea11398cbd1b","customerId":"69e0bnz828w","number":"424242******4242","type":"VISA","name":"Sample User Name","document":"1020304050","address":{"line1":"Address Name","line2":"17 25","line3":"Of 301","city":"City Name","state":"State Name","country":"CO","postalCode":"00000","phone":"300300300"}}]}
         */
    
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/69e0bnz828w', {
            headers: {
                'content-type':'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
        }
        })
        .then(res => res.text())
        .then(body => console.log(body));
    }

    registroTarjetaCredito(){

        /**
         * Description = Creación de una tarjeta de crédito (Token) y asociarla a un usuario.
         * @method registroTarjetaCredito
         * @param {} {
           "name": "Sample User Name",
           "document": "1020304050",
           "number": "4242424242424242",
           "expMonth": "01",
           "expYear": "2018",
           "type": "VISA",
           "address": {
              "line1": "Address Name",
              "line2": "17 25",
              "line3": "Of 301",
              "postalCode": "00000",
              "city": "City Name",
              "state": "State Name",
              "country": "CO",
              "phone": "300300300"
           }
        }
         * @return {"token":"d7fe8762-cb4f-4ca8-9081-ea11398cbd1b"}
         */
        
        var body = {
            "name": "Sample User Name",
            "document": "1020304050",
            "number": "4242424242424242",
            "expMonth": "12",
            "expYear": "2024",
            "type": "VISA",
            "address": {
                "line1": "Address Name",
                "line2": "17 25",
                "line3": "Of 301",
                "postalCode": "00000",
                "city": "City Name",
                "state": "State Name",
                "country": "CO",
                "phone": "300300300"
            }
        }
        
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/69e0bnz828w/creditCards', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }

    actualizacionTarjetaCredito(){

        /**
         * Description = Actualizar la información de un token.
         * @method actualizacionTarjetaCredito
         * @param {} {
           "expMonth": "12",
           "expYear": "2016",
           "name": "Sample user name",
           "document": "65858645",
           "address": {
              "line1": "Sample Address",
              "line2": "Cll 93 B",
              "line3": "Ofic. 301",
              "postalCode": "00000",
              "city": "city",
              "country": "CO",
              "state": "state",
              "phone": "2266758"
           }
        }
         * @return {"token": "a068e980-a6d7-4a19-b549-75c04f39ec22","customerId": "eab38z33hh2","number": "424242******4242","type": "VISA","name": "Sample user name","document": "65858645","address": { "line1": "Sample Address","line2": "Cll 93 B","line3": "Ofic. 301", "city": "city", "state": "state", "country": "CO", "postalCode": "00000", "phone": "2266758" }
        }
         */
        
        var body = {
            "expMonth": "12",
            "expYear": "2016",
            "name": "Sample user name",
            "document": "65858645",
            "address": {
                "line1": "Sample Address",
                "line2": "Cll 93 B",
                "line3": "Ofic. 301",
                "postalCode": "00000",
                "city": "city",
                "country": "CO",
                "state": "state",
                "phone": "2266758"
            }
        }
        
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/creditCards/d7fe8762-cb4f-4ca8-9081-ea11398cbd1b', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }

    eliminarTarjetaCredito(){

        /**
         * Description = Eliminar una tarjeta de crédito (Token) asociado a un usuario.
         * @method eliminarTarjetaCredito
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/creditCards/d7fe8762-cb4f-4ca8-9081-ea11398cbd1b
         * @return {"description":"credit card token d7fe8762-cb4f-4ca8-9081-ea11398cbd1b has been removed successfully"}
         */
        
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/69e0bnz828w/creditCards/d7fe8762-cb4f-4ca8-9081-ea11398cbd1b', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }
}