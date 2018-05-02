var fetch = require('node-fetch')

module.exports = class Cliente {
    constructor() { }
    consultaCliente(id) {
        /**
         * Description = Consulta la información relacionada con el cliente.
         * @method consultaCliente
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/54ec7fa7905
         * @return {"id":"54ec7fa7905","fullName":"Pedro E. Perez","email":"pperez@payulatam.com"}
         */

        fetch(`https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/${id}`, {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB',
                'Accept': 'application/json'
            }
        })
            .then(res => res.text())
            .then(body => console.log(body));
    }
    registroCliente() {
        /**
     * Description = Creación de un cliente en el sistema.
     * @method registroCliente
     * 
     * @param {} { "fullName": "Pedro E. Perez", "email": "pperez@payulatam.com" }
     * @return {"id": "6ahxar252","fullName": "Pedro E. Perez","email": "pperez@payulatam.com"}
     */

        var body = {
            "fullName": "Pedro E. Perez",
            "email": "pperez@payulatam.com"
        }

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers', {
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
    actualizacionCliente() {
        /**
     * Description = Actualiza la información de un cliente en el sistema.
     * @method actualizacionCliente
     * @param {} { "fullName": "Pedro E. Perez", "email": "pperez@payulatam.com" }
     * @return {"id": "6ahxar252","fullName": "Pedro E. Perez","email": "pperez@payulatam.com"}
     */

        var body = {
            "fullName": "Pedro E. Perez",
            "email": "pperez@payulatam.com"
        }

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/54ec7fa7905', {
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
         * @param {} https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/54ec7fa7905
         * @return {"description":"The customer [54ec7fa7905] has been deleted"}
         */

        fetch('https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/54ec7fa7905', {
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