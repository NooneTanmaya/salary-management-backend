const fs = require('fs');
const path = require('path');

const defaultEmployees = [
  {
    id: 1,
    fullName: 'Tanmaya Sharma',
    country: 'India',
    jobTitle: 'Software Engineer',
    salary: 60000,
  },
  {
    id: 2,
    fullName: 'Manasa Patel',
    country: 'India',
    jobTitle: 'Product Manager',
    salary: 80000,
  },
];

function loadEmployees() {
  const dataPath = path.resolve(__dirname, '..', 'data', 'employees.json');

  if (!fs.existsSync(dataPath)) {
    return [...defaultEmployees];
  }

  try {
    const content = fs.readFileSync(dataPath, 'utf8');
    const employees = JSON.parse(content);
    if (!Array.isArray(employees)) {
      return [...defaultEmployees];
    }
    return employees;
  } catch (error) {
    console.error('Failed to load employee data:', error);
    return [...defaultEmployees];
  }
}

module.exports = {
  loadEmployees,
  defaultEmployees,
};
