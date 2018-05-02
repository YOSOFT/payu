//Creación de Suscripciones
var fetch = require('node-fetch')

module.exports = class Suscripcion {
    constructor() { }
    consultaSuscripcion() {

        /**
         * Description = Consultar la información básica asociada a la suscripción indicada.
         * @method consultaSuscripcion
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/subscriptions/5a6a30793iy
         * @return {"id":"5a6a30793iy","plan":{"id":"2cd88ff5-3d12-43c7-b8aa-161931968ed2"},"customer":{"id":"96a6au8enpt"},"trialDays":"0","quantity":"1","installments":"1","currentPeriodStart":1527483600000,"currentPeriodEnd":1530161999000,"creditCardToken":"7f6eb2bd-4355-48f9-a1cd-6fbfd21c734f","immediatePayment":true,"extra1":"Extra 1","extra2":"Extra 2","deliveryAddress":{"line1":"Address Name","line2":"17 25","line3":"Of 301","city":"City Name","state":"State Name","country":"CO","postalCode":"00000","phone":"300300300"},"notifyUrl":"http://www.test.com/confirmation"}
         */

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/subscriptions/5a6a30793iy', {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }
    registroSuscripcion() {
        /**
         * Description = Creación de una nueva suscripción de un cliente a un plan.
         * @method registroSuscripcion
         * @param {} {
            "quantity": "1",
            "installments": "1",
            "trialDays": "15",
            "immediatePayment": true,
            "extra1": "Extra 1",
            "extra2": "Extra 2",
            "customer": {
               "fullName": "Pedro Perez",
               "email": "pperez@payulatam.com",
               "creditCards": [
                  {
                     "name": "Pedro Perez",
                     "document": "101010123",
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
               ]
            },
            "plan": {
               "planCode": "sample-plan-code-129",
               "description": "Sample Plan 001",
               "accountId": "512321",
               "intervalCount": "1",
               "interval": "MONTH",
               "maxPaymentsAllowed": "12",
               "maxPaymentAttempts": "3",
               "paymentAttemptsDelay": "1",
               "maxPendingPayments": "1",
               "trialDays": "30",
               "additionalValues": [
                  {
                     "name": "PLAN_TAX",
                     "value": 1600,
                     "currency": "COP"
                  },
                  {
                     "name": "PLAN_VALUE",
                     "value": 10000,
                     "currency": "COP"
                  },
                  {
                     "name": "PLAN_TAX_RETURN_BASE",
                     "value": 8400,
                     "currency": "COP"
                  }
               ]
            } ,
            "deliveryAddress": {
               "line1": "Address Name",
               "line2": "17 25",
               "line3": "Of 301",
               "postalCode": "00000",
               "city": "City Name",
               "state": "State Name",
               "country": "CO",
               "phone": "300300300"
               } ,
            "notifyUrl": "http://www.test.com/confirmation"
         }
         * @return {"id":"5a6a30793iy","plan":{"id":"2cd88ff5-3d12-43c7-b8aa-161931968ed2","planCode":"sample-plan-code-129","description":"Sample Plan 001","accountId":"512321","intervalCount":1,"interval":"MONTH","additionalValues":[{"name":"PLAN_TAX_RETURN_BASE","value":8400,"currency":"COP"},{"name":"PLAN_VALUE","value":10000,"currency":"COP"},{"name":"PLAN_TAX","value":1600,"currency":"COP"}]},"customer":{"id":"96a6au8enpt","fullName":"Pedro Perez","email":"pperez@payulatam.com","creditCards":[{"token":"7f6eb2bd-4355-48f9-a1cd-6fbfd21c734f"}]},"quantity":"1","installments":"1","currentPeriodStart":1524891600000,"currentPeriodEnd":1527483599000,"immediatePayment":true,"extra1":"Extra 1","extra2":"Extra 2","deliveryAddress":{"line1":"Address Name","line2":"17 25","line3":"Of 301","city":"City Name","state":"State Name","country":"CO","postalCode":"00000","phone":"300300300"},"notifyUrl":"http://www.test.com/confirmation"}
         */

        //Con todos los elementos nuevos
        var body = {
            "quantity": "1",
            "installments": "1",
            "trialDays": "15",
            "immediatePayment": true,
            "extra1": "Extra 1",
            "extra2": "Extra 2",
            "customer": {
                "fullName": "Pedro Perez",
                "email": "pperez@payulatam.com",
                "creditCards": [
                    {
                        "name": "Pedro Perez",
                        "document": "101010123",
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
                ]
            },
            "plan": {
                "planCode": "sample-plan-code-129",
                "description": "Sample Plan 001",
                "accountId": "512321",
                "intervalCount": "1",
                "interval": "MONTH",
                "maxPaymentsAllowed": "12",
                "maxPaymentAttempts": "3",
                "paymentAttemptsDelay": "1",
                "maxPendingPayments": "1",
                "trialDays": "30",
                "additionalValues": [
                    {
                        "name": "PLAN_TAX",
                        "value": 1600,
                        "currency": "COP"
                    },
                    {
                        "name": "PLAN_VALUE",
                        "value": 10000,
                        "currency": "COP"
                    },
                    {
                        "name": "PLAN_TAX_RETURN_BASE",
                        "value": 8400,
                        "currency": "COP"
                    }
                ]
            },
            "deliveryAddress": {
                "line1": "Address Name",
                "line2": "17 25",
                "line3": "Of 301",
                "postalCode": "00000",
                "city": "City Name",
                "state": "State Name",
                "country": "CO",
                "phone": "300300300"
            },
            "notifyUrl": "http://www.test.com/confirmation"
        }

        //Con todos los elementos existentes (Validar no funciona)
        var body = {
            "quantity": "1",
            "installments": "1",
            "trialDays": "10",
            "customer": {
                "id": "96a6au8enpt",
                "creditCards": [
                    {
                        "token": "7f6eb2bd-4355-48f9-a1cd-6fbfd21c734f"
                    }
                ]
            },
            "plan": {
                "planCode": "plan-code-128"
            }
        }

        //Plan cliente ya creados y una tarjeta nueva (Validar no genera el token de la tarjeta y genera error)

        var body = {
            "quantity": "1",
            "installments": "1",
            "trialDays": "10",
            "customer": {
                "id": "96a6au8enpt",
                "creditCards": [
                    {
                        "name": "Sample User Name",
                        "document": "101010123",
                        "number": "4242424242424242",
                        "expMonth": "01",
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
                ]
            },
            "plan": {
                "planCode": "plan-code-128"
            }
        }

        //Cliente y tarjeta ya creados y con plan nuevo (validar no funciona)
        var body = {
            "installments": "1",
            "trialDays": "30",
            "customer": {
                "id": "96a6au8enpt",
                "creditCards": [
                    {
                        "token": "7f6eb2bd-4355-48f9-a1cd-6fbfd21c734f"
                    }
                ]
            },
            "plan": {
                "planCode": "sample-plan-code-156",
                "description": "Sample Plan 001",
                "accountId": "512321",
                "intervalCount": "1",
                "interval": "MONTH",
                "maxPaymentsAllowed": "12",
                "maxPaymentAttempts": "3",
                "paymentAttemptsDelay": "1",
                "maxPendingPayments": "1",
                "trialDays": "30",
                "additionalValues": [
                    {
                        "name": "PLAN_TAX",
                        "value": 1600,
                        "currency": "COP"
                    },
                    {
                        "name": "PLAN_VALUE",
                        "value": 10000,
                        "currency": "COP"
                    },
                    {
                        "name": "PLAN_TAX_RETURN_BASE",
                        "value": 8400,
                        "currency": "COP"
                    }
                ]
            }
        }


        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/subscriptions', {
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
    actualizacionSuscripcion() {
        /**
         * Description = Actualizar la información asociada a la suscripción indicada. En este momento sólo es posible actualizar el token de la tarjeta de crédito a la cual se realiza el cargo de la suscripción.
         * @method actualizacionSuscripcion
         * @param {} {
            "creditCardToken": "7f6eb2bd-4355-48f9-a1cd-6fbfd21c734f",
            "deliveryAddress": {
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
        * @return {"id":"5a6a30793iy","plan":{"id":"2cd88ff5-3d12-43c7-b8aa-161931968ed2"},"customer":{"id":"96a6au8enpt"},"trialDays":"0","quantity":"1","installments":"1","currentPeriodStart":1527483600000,"currentPeriodEnd":1530161999000,"creditCardToken":"7f6eb2bd-4355-48f9-a1cd-6fbfd21c734f","deliveryAddress":{"line1":"Address Name","line2":"17 25","line3":"Of 301","city":"City Name","state":"State Name","country":"CO","postalCode":"00000","phone":"300300300"}}
        */

        var body =
            {
                "creditCardToken": "7f6eb2bd-4355-48f9-a1cd-6fbfd21c734f",
                "deliveryAddress": {
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

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/subscriptions/5a6a30793iy', {
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

    eliminarSuscripcion() {
        /**
         * Description = Eliminar la suscripción, es decir la relación del cliente al plan.
         * @method eliminarSuscripcion
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/subscriptions/5a6a30793iy
         * @return {"description":"The subscription [5a6a30793iy] has been cancelled"}
         */

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/subscriptions/5a6a30793iy', {
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





