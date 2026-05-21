const fs = require('fs');
const path = require('path');

function parseNames(nameText) {
  return nameText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
}

function randomInt(min, max, randomFn = Math.random) {
  return Math.floor(randomFn() * (max - min + 1)) + min;
}

function createFullName(firstNames, lastNames, randomFn = Math.random) {
  if (!Array.isArray(firstNames) || !Array.isArray(lastNames)) {
    throw new TypeError('firstNames and lastNames must be arrays');
  }

  if (firstNames.length === 0 || lastNames.length === 0) {
    throw new Error('Name lists must contain at least one entry');
  }

  const firstName = firstNames[randomInt(0, firstNames.length - 1, randomFn)];
  const lastName = lastNames[randomInt(0, lastNames.length - 1, randomFn)];

  return `${firstName} ${lastName}`;
}

function generateEmployees(count, firstNames, lastNames, options = {}) {
  const randomFn = options.randomFn || Math.random;
  const jobTitles = options.jobTitles || [
    'Software Engineer',
    'Product Manager',
    'Quality Analyst',
    'DevOps Engineer',
    'UI/UX Designer',
    'Business Analyst',
    'Data Engineer',
    'Support Engineer',
  ];
  const countries = options.countries || [
    'India',
    'United States',
    'Germany',
    'Australia',
    'Canada',
    'United Kingdom',
    'Brazil',
    'France',
  ];

  if (typeof count !== 'number' || count <= 0) {
    throw new TypeError('count must be a positive number');
  }

  return Array.from({ length: count }, (_, index) => {
    return {
      id: index + 1,
      fullName: createFullName(firstNames, lastNames, randomFn),
      country: countries[randomInt(0, countries.length - 1, randomFn)],
      jobTitle: jobTitles[randomInt(0, jobTitles.length - 1, randomFn)],
      salary: 30000 + randomInt(0, 120000, randomFn),
    };
  });
}

function readNamesFromFile(filename) {
  const filePath = path.resolve(__dirname, '..', 'data', filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return parseNames(fileContent);
}

module.exports = {
  parseNames,
  createFullName,
  generateEmployees,
  readNamesFromFile,
};
