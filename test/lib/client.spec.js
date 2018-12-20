/* eslint-env mocha */

const qvo = require('../../index');
const { expect } = require('chai');

describe('QVO Client', () => {
  const conf = {
    QVO_URL: 'https://playground.qvo.cl',
    API_TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21tZXJjZV9pZCI6ImNvbV9YR255M0pIbDZLUjFUSV9QbVZ4Vm9nIiwiYXBpX3Rva2VuIjp0cnVlfQ.-D6x9-p_8bo5bwaY9BVUyou7Ee3gB0A33kVFv0ucp6o',
    CUSTOMER_ID: 'cus_qos_6r3-4I4zIiou2BVMHg',
    DEBUG_LOGS: true,
  };

  it('should create client', async () => {
    const user = {
      email: 'EXT_AAALARCON@FALABELLA.CL',
      name: 'ANTONIO',
    };

    const qvoClient = new qvo.client(conf);

    const client = await qvoClient.create(user);

    console.log(client);
  });

  it('should create card', async () => {
    const payload = {
      consumerId: 'cus_K3Xc5dz1cly-3QrDO0nx8Q',
      returnUrl: 'http://example.com/return',
    }

    const qvoClient = new qvo.client(conf);

    const response = await qvoClient.createCard(payload);

    expect(response).property('code', 200)
    expect(response).property('data').property('redirect_url')
  });

  it('should create subscriptions', async () => {
    const payload = {
      subscriptionId: 'trx_IfLYt-bWPzZCRSWnWxY0OA'
    }

    const qvoClient = new qvo.client(conf);

    const response = await qvoClient.createSubscriptions(payload);

    expect(response).property('code', 201);
  });
});
