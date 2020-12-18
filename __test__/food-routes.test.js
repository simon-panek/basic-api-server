'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const Food = require('../src/models/food-model.js');
const food = new Food ();
const mockRequest = supertest(server);


describe('food routes', () => {
  it ('1. .get/food request should respond with a 200', () => {
    return mockRequest
      .get('/food')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('2. .get/food/1 should respond with a 200', () => {
    return mockRequest
      .get('/food/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('3. .post/food?name=name should respond with a 200', () => {
    return mockRequest
      .post('/food?name=name')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('4. .put/food/1?name=test should respond with a 200', () => {
    return mockRequest
      .put('/food/1?name=test')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('5. delete/food/1 should respond with a 200', () => {
    return mockRequest
      .delete('/food/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })
})