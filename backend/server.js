const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

let employees = [
    {
        id: 1,
        fullName: 'Tanmaya',
        country: 'India',
        jobTitle: 'Software Engineer',
        salary: 60000,

    },
    {
        id: 2,
        fullName: 'Manasa',
        country: 'India',
        jobTitle: 'Product Manager',
        salary: 80000,
    }
];

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.get('/summary', (req, res) => {
    const totalEmployees = employees.length;
    const totalSalary = employees.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0);
    const averageSalary = totalEmployees > 0 ? totalSalary / totalEmployees : 0;

    res.json({
        totalEmployees,
        totalSalary,
        averageSalary,
    });
});

app.post('/employees', (req, res) => {
    const newEmployee = {
        id: employees.length + 1,
        ...req.body, // Simple ID generation
    };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

app.delete('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    employees = employees.filter(emp => emp.id !== id
    );

    res.json({
        message: 'Employee deleted successfully'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});