'use strict';

class Response {

  static success({message = '', data = {}}) {
    return {
      code: 200,
      status: 'success',
      message: message,
      data: data,
    };
  }

  static error({code = 500, message = '', error = {}}) {
    return {
      code: code,
      status: 'error',
      message: message,
      error: error,
    };
  }
}

module.exports = Response;
