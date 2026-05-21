const assert = require('node:assert');
const { test } = require('node:test');
const {
  parseNames,
  createFullName,
  generateEmployees,
} = require('./nameGenerator');

test('parseNames returns trimmed, non-empty names', () => {
  const input = 'Alice\n\n Bob \nCharlie\r\n';
  const expected = ['Alice', 'Bob', 'Charlie'];
  assert.deepStrictEqual(parseNames(input), expected);
});

test('createFullName combines first and last names deterministically', () => {
  const firstNames = ['Alice'];
  const lastNames = ['Jones'];
  const fullName = createFullName(firstNames, lastNames, () => 0.5);
  assert.strictEqual(fullName, 'Alice Jones');
});

test('generateEmployees returns requested count with required fields', () => {
  const firstNames = ['A', 'B'];
  const lastNames = ['X', 'Y'];
  const employees = generateEmployees(5, firstNames, lastNames, {
    randomFn: () => 0.1,
  });

  assert.strictEqual(employees.length, 5);
  employees.forEach((employee, index) => {
    assert.strictEqual(employee.id, index + 1);
    assert.match(employee.fullName, /^[AB] [XY]$/);
    assert.ok(employee.jobTitle.length > 0);
    assert.ok(employee.country.length > 0);
    assert.ok(typeof employee.salary === 'number');
  });
});
