const assert = require('node:assert');
const test = require('node:test');
const request = require('supertest');
const app = require('./app');

test('GET /employees returns employee list', async () => {
  const response = await request(app).get('/employees');

  assert.strictEqual(response.statusCode, 200);
  assert.ok(Array.isArray(response.body));
});

test('POST /employees creates employee', async () => {
  const response = await request(app)
    .post('/employees')
    .send({
      fullName: 'Manasa',
      country: 'India',
      jobTitle: 'Product Manager',
      salary: 80000,
    });

  assert.strictEqual(response.statusCode, 201);
  assert.strictEqual(response.body.fullName, 'Manasa');
});