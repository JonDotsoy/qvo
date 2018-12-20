const qvo = require('../../index');

describe('Client', () => {
  it('should create qvo', async () => {
    let conf = {
      "QVO_URL": "https://playground.qvo.cl",
      "API_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21tZXJjZV9pZCI6ImNvbV9YR255M0pIbDZLUjFUSV9QbVZ4Vm9nIiwiYXBpX3Rva2VuIjp0cnVlfQ.-D6x9-p_8bo5bwaY9BVUyou7Ee3gB0A33kVFv0ucp6o",
      "CUSTOMER_ID": "cus_qos_6r3-4I4zIiou2BVMHg",
      "DEBUG_LOGS": true
    };

    let user = {
      "email": "EXT_AAALARCON@FALABELLA.CL",
      "name": "ANTONIO"
    };

    let qvoClient = new qvo.client(conf);

    const client = await qvoClient.create(user);

    console.log(client)
  })
})
