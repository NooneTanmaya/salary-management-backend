const assert = require('node:assert');
const test = require('node:test');
const request = require('supertest');
const app = require('./app');

test('DELETE /employees updates /summary totals', async () => {
  // get current summary
  const before = (await request(app).get('/summary')).body;

  // add a new employee with known salary
  const salary = 5000;
  const postRes = await request(app).post('/employees').send({
    fullName: 'Test Delete',
    country: 'Testland',
    jobTitle: 'QA',
    salary,
  });

  assert.strictEqual(postRes.statusCode, 201);
  const newId = postRes.body.id;

  // after add, summary should increase
  const afterAdd = (await request(app).get('/summary')).body;
  assert.strictEqual(afterAdd.totalEmployees, before.totalEmployees + 1);
  assert.strictEqual(afterAdd.totalSalary, before.totalSalary + salary);

  // delete the newly added employee
  const delRes = await request(app).delete(`/employees/${newId}`);
  assert.strictEqual(delRes.statusCode, 200);

  // after delete, summary should revert to original
  const afterDelete = (await request(app).get('/summary')).body;
  assert.strictEqual(afterDelete.totalEmployees, before.totalEmployees);
  assert.strictEqual(afterDelete.totalSalary, before.totalSalary);
});
