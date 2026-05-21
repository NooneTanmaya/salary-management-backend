# Salary Management Backend

A simple Express backend for the Salary Management application.

## Overview

This service provides backend endpoints to manage employee records and calculate salary statistics. It is designed for local development and works together with the frontend app in `../frontend`.

## Requirements

- Node.js 18+ or compatible
- npm

## Install

```bash
cd backend
npm install
```

## Run

Start the server in development mode:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

## Seed data

Generate sample employee data for local testing:

```bash
npm run seed
```

This command generates `backend/data/employees.json` using names from `backend/data/first_names.txt` and `backend/data/last_names.txt`.

## Tests

Run the backend test suite:

```bash
npm test
```

## API Endpoints

### GET /employees

Returns the list of employee records.

### GET /summary

Returns salary summary statistics:

- `totalEmployees`
- `totalSalary`
- `averageSalary`

### POST /employees

Create a new employee record.

Request body example:

```json
{
  "fullName": "Jane Doe",
  "country": "USA",
  "jobTitle": "Software Engineer",
  "salary": 85000
}
```

### DELETE /employees/:id

Delete the employee with the specified `id`.

## Notes

- The backend uses an in-memory data store, so data is reset when the server restarts.
- CORS is enabled to allow requests from the frontend.
- Use this backend together with the frontend in `../frontend` for a complete application.
