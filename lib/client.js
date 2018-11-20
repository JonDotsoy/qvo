'use strict';
const request = require('request-promise');

function createClient(config, {email, name, phone, metadata, address}) {
  return new Promise((resolve, reject) => {
    request.post({
        url: this.config.QVO_URL + 'customers',
        json: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.config.API_TOKEN
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
          if(self.config.DEBUG_LOGS){
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

module.exports = createClient;
