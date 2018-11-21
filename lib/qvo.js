'use strict';

class QVO {

  constructor(config) {
    this._qvo_url = config.QVO_URL;
    this._api_token = config.API_TOKEN;
    this._customer_id = config.CUSTOMER_ID;
    this._debug_logs = config.DEBUG_LOGS;
  }

}

module.exports = QVO;
