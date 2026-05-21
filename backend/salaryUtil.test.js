const assert = require('node:assert');
const test = require('node:test');
const { getTotalSalary } = require('./utils/salaryUtils');

test('getTotalSalary returns the sum of salaries', () => {
  const employees = [
    { salary: 10000 },
    { salary: 20000 },
  ];

  assert.strictEqual(getTotalSalary(employees), 30000);
});