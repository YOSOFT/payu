//Creación de Cargos Adicionales
var fetch = require('node-fetch')

module.exports = class CargosAdicionales {
    constructor() { }
    consultaCargosAdicionalesPorId() {
        /**
         * Description = Consulta la información del cargo extra de una factura a partir de su identificador.
         * @method consultaCargosAdicionales
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/recurringBillItems/8d4aacb4v2s
         * @return {"id":"8d4aacb4v2s","description":"Cargo extra de prueba","additionalValues":[{"name":"ITEM_TAX_RETURN_BASE","value":16806,"currency":"COP"},{"name":"ITEM_TAX","value":3193,"currency":"COP"},{"name":"ITEM_VALUE","value":20000,"currency":"COP"}],"subscriptionId":"f098e30mouw","recurringBillId":"bf9c185b-35e8-40b7-b50c-f3ba9588e779"}
         */

        //Por Id del cargo adicional
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/recurringBillItems/8d4aacb4v2s', {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }
    consultarCargoAdicionalPorDescripcion() {
        //Por descripción del cargo adicional
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/recurringBillItems/?description=Cargo extra de prueba', {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }
    consultarCargoAdicionnalPorSuscripcion() {
        //Por suscripción
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/recurringBillItems/?subscriptionId=f098e30mouw', {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }

    registroCargosAdicionales() {
        /**
         * Description = Adiciona cargos extras a la factura correspondiente al periodo actual.
         * @method registroCargosAdicionales
         * @param {} {
           "description": "Cargo extra de prueba",
           "additionalValues": [
              {
                 "name": "ITEM_VALUE",
                 "value": "20000",
                 "currency": "COP"
              },
              {
                 "name": "ITEM_TAX",
                 "value": "3193",
                 "currency": "COP"
              },
              {
                 "name": "ITEM_TAX_RETURN_BASE",
                 "value": "16806",
                 "currency": "COP"
              }
           ]
        }
         * @return {"id":"8d4aacb4v2s","description":"Cargo extra de prueba","additionalValues":[{"name":"ITEM_TAX_RETURN_BASE","value":16806,"currency":"COP"},{"name":"ITEM_TAX","value":3193,"currency":"COP"},{"name":"ITEM_VALUE","value":20000,"currency":"COP"}],"subscriptionId":"f098e30mouw","recurringBillId":"bf9c185b-35e8-40b7-b50c-f3ba9588e779"}
         */

        var body = {
            "description": "Cargo extra de prueba",
            "additionalValues": [
                {
                    "name": "ITEM_VALUE",
                    "value": "20000",
                    "currency": "COP"
                },
                {
                    "name": "ITEM_TAX",
                    "value": "3193",
                    "currency": "COP"
                },
                {
                    "name": "ITEM_TAX_RETURN_BASE",
                    "value": "16806",
                    "currency": "COP"
                }
            ]
        }

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/subscriptions/f098e30mouw/recurringBillItems', {
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

    actualizacionCargosAdicionales() {
        /**
         * Description = Actualiza la información del cargo extra de una factura.
         * @method actualizacionCargosAdicionales
         * @param {} {
            "description": "Cargo extra de prueba",
            "additionalValues": [
               {
                  "name": "ITEM_VALUE",
                  "value": "20000",
                  "currency": "COP"
               },
               {
                  "name": "ITEM_TAX",
                  "value": "3193",
                  "currency": "COP"
               },
               {
                  "name": "ITEM_TAX_RETURN_BASE",
                  "value": "16806",
                  "currency": "COP"
               }
            ]
         }
         * @return {"id":"8d4aacb4v2s","description":"Cargo extra de prueba","additionalValues":[{"name":"ITEM_TAX_RETURN_BASE","value":16806,"currency":"COP"},{"name":"ITEM_TAX","value":3193,"currency":"COP"},{"name":"ITEM_VALUE","value":20000,"currency":"COP"}],"subscriptionId":"f098e30mouw","recurringBillId":"bf9c185b-35e8-40b7-b50c-f3ba9588e779"}
         */

        var body = {
            "description": "Cargo extra de prueba",
            "additionalValues": [
                {
                    "name": "ITEM_VALUE",
                    "value": "20000",
                    "currency": "COP"
                },
                {
                    "name": "ITEM_TAX",
                    "value": "3193",
                    "currency": "COP"
                },
                {
                    "name": "ITEM_TAX_RETURN_BASE",
                    "value": "16806",
                    "currency": "COP"
                }
            ]
        }

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/recurringBillItems/8d4aacb4v2s', {
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

    eliminarCliente() {
        /**
         * Description = Elimina un usuario del sistema.
         * @method eliminarCliente
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/recurringBillItems/8d4aacb4v2s
         * @return {"description":"recurring bill item 8d4aacb4v2s has been removed successfully"}
         */
        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/recurringBillItems/8d4aacb4v2s', {
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












