'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const Food = require('../src/models/food-model.js');
const food = new Food ();
const mockRequest = supertest(server);


describe('food routes', () => {
  it ('.get/food request should respond with a 200', () => {
    return mockRequest
      .get('/food')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('.get/food/1 should respond with a 200', () => {
    return mockRequest
      .post('/food?name=name')
      .get('/food/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('.post/food?name=name should respond with a 200', () => {
    return mockRequest
      .post('/food?name=name')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('.put/food/1?name=test should respond with a 200', () => {
    return mockRequest
      .post('/food?name=name')
      .put('/food/1?name=test')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })

  it ('delete/food/1 should respond with a 200', () => {
    return mockRequest
      .post('/food?name=name')
      .delete('/food/1')
      .then (results => {
        expect(results.status).toBe(200)
      })
  })
})