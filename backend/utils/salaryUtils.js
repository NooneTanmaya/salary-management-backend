function getTotalSalary(employees) {
  if (!Array.isArray(employees)) {
    throw new TypeError('Expected an array of employees');
  }

  return employees.reduce((sum, employee) => {
    const salary = Number(employee.salary);
    return sum + (Number.isFinite(salary) ? salary : 0);
  }, 0);
}

module.exports = {
  getTotalSalary,
};
