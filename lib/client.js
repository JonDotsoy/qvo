'use strict';
const request = require('request-promise');
const QVO = require('./qvo');
const response = require('./response');

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
      }, (err, resp, body) => {
        if (err) {
          if (this._debug_logs) {
            console.log('Error al conectarse con QVO');
            console.log(err);
          }
          return resolve(
            response
              .error({
                message: 'Error al conectarse con QVO',
                error: err
              })
          );
        }
        if (!(/^2/.test('' + resp.statusCode))) { // Status Codes other than 2xx
          if (this._debug_logs) {
            console.log('Error al crear cliente');
            console.log(JSON.stringify(body));
          }
          return resolve(
            response
              .error({
                code: resp.statusCode,
                message: 'Error al crear cliente',
                error: body.error
              })
          );
        }

        resolve(response.success({data: body}));
      });
    });
  }
}

module.exports = Client;
