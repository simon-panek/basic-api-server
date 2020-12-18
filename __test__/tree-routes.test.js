'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const Tree = require('../src/models/tree-model.js');
const tree = new Tree ();
const mockRequest = supertest(server);


describe('tree routes', () => {
  it ('10. .get/tree request should respond with a 200', () => {
    return mockRequest
      .get('/tree')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('11. .get/tree/1 should respond with a 200', () => {
    return mockRequest
      .get('/tree/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('12. .post/tree?name=name should respond with a 200', () => {
    return mockRequest
      .post('/tree?name=name')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('13. .put/tree/1?name=test should respond with a 200', () => {
    return mockRequest
      .put('/tree/1?name=test')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('14. delete/tree/1 should respond with a 200', () => {
    return mockRequest
      .delete('/tree/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })
})