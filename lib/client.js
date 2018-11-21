'use strict';
const request = require('request-promise');
const QVO = require('./qvo');

class Client extends QVO {

  constructor(config) {
    super(config);
  }

  create({email, name, phone, metadata, address}) {
    return new Promise((resolve, reject) => {
      request.post({
          url: `${this._qvo_url}/customers`,
          json: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this._api_token}`
          },
          body: {
            email,
            ...(name && {name}),
            ...(phone && {phone}),
            ...(metadata && {metadata}),
            ...(address && {address}),
          },
        },
        function (err, httpResponse, body) {
          if (err) {
            if(self.config._debug_logs){
              console.log('Error al registrar al cliente');
              reject(err);
            }
          }
          if (httpResponse.statusCode !== 200) {
            console.log('Error al registrar al cliente');
            console.log(JSON.stringify(body));
            reject(err);
          }
          resolve(body);
        });
    });
  }
}

module.exports = Client;
