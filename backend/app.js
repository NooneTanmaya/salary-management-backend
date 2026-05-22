const express = require('express');
const cors = require('cors');
const { loadEmployees } = require('./utils/dataLoader');
const { getTotalSalary } = require('./utils/salaryUtils');

const app = express();
app.use(cors());
app.use(express.json());

const employees = loadEmployees();

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/summary', (req, res) => {
  const totalEmployees = employees.length;
  const totalSalary = getTotalSalary(employees);
  const averageSalary = totalEmployees > 0 ? totalSalary / totalEmployees : 0;

  res.json({
    totalEmployees,
    totalSalary,
    averageSalary,
  });
});

app.post('/employees', (req, res) => {
  const { fullName, country, jobTitle, salary } = req.body;

  // Validate required fields
  if (!fullName || !country || !jobTitle || salary === undefined || salary === null) {
    return res.status(400).json({ 
      message: 'Missing required fields: fullName, country, jobTitle, and salary are all required.' 
    });
  }

  const newEmployee = {
    id: employees.length + 1,
    fullName,
    country,
    jobTitle,
    salary,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const removed = employees.find(emp => emp.id === id);

  if (!removed) {
    return res.status(404).json({ message: 'Employee not found.' });
  }

  const updatedEmployees = employees.filter(emp => emp.id !== id);
  employees.length = 0;
  employees.push(...updatedEmployees);

  res.json({
    message: 'Employee deleted successfully',
  });
});

module.exports = app;
