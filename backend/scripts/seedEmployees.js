const fs = require('fs/promises');
const path = require('path');
const {
  readNamesFromFile,
  generateEmployees,
} = require('../utils/nameGenerator');

const DEFAULT_COUNT = 10000;
const outputPath = path.resolve(__dirname, '..', 'data', 'employees.json');

async function main() {
  const count = Number(process.argv[2]) || DEFAULT_COUNT;

  if (!Number.isInteger(count) || count <= 0) {
    throw new Error('Please provide a positive integer employee count.');
  }

  const firstNames = readNamesFromFile('first_names.txt');
  const lastNames = readNamesFromFile('last_names.txt');
  const employees = generateEmployees(count, firstNames, lastNames);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(employees, null, 2), 'utf8');
  console.log(`Seeded ${employees.length} employees to ${outputPath}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
