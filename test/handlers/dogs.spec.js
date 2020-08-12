'use strict';

const supertest = require('supertest');
const server = require('../../src/server');

describe('/dogs', () => {
  let request;
  let axios = {
    get: () => Promise.resolve({ data: 'foobar' }),
  };

  before(() => {
    const app = server(axios);
    request = supertest.agent(app);
  });
  it('should return 200', () => {
    return request.get('/dogs').expect(200);
  });
});
