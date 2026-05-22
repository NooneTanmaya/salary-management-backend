# Salary Management — Backend

An Express backend for the Salary Management application. This API provides endpoints used by the frontend to list, add and remove employees and to return summary metrics.

## Quick start

Prerequisites:
- Node.js 18+ and `npm`

Install dependencies:

```bash
cd backend
npm install
```

Run the development server with auto-reload:

```bash
npm run dev
```

The server listens on port `5000` by default (see `server.js`).

## API endpoints

- `GET /employees` — return an array of employee objects
- `GET /summary` — return `{ totalEmployees, totalSalary, averageSalary }`
- `POST /employees` — add a new employee (JSON body; required: `fullName`, `country`, `jobTitle`, `salary`)
- `DELETE /employees/:id` — delete an employee by id

Example POST body:

```json
{
  "fullName": "Jane Doe",
  "country": "India",
  "jobTitle": "Engineer",
  "salary": 60000
}
```

## Project structure

- `server.js` — starts the HTTP server
- `app.js` — Express application and routes
- `utils/` — helper modules (`dataLoader.js`, `salaryUtils.js`, `nameGenerator.js`)
- `data/` — seeded employee data and name lists
- `scripts/seedEmployees.js` — utility to generate and seed many employees for testing
- `employeeApi.test.js`, `summary.test.js`, `salaryUtil.test.js` — simple tests using Node's `test` runner and `supertest`

## Scripts

- `npm run dev` — run server with `nodemon` for development
- `npm run seed` — generate seeded employee data (example: `npm run seed` will use defaults or pass a number)
- `npm test` — run tests with Node's built-in test runner

## Validation & errors

- The backend validates required fields on `POST /employees` and returns `400` when missing. Example message:

```
{
  "message": "Missing required fields: fullName, country, jobTitle, and salary are all required."
}
```

The frontend reads and displays this message in the UI.

## Notes

- CORS is enabled to allow the frontend to call the API during development.
- The backend uses an in-memory data store; data is reset when the server restarts.
- On Windows, if `npm` scripts fail due to execution policy, run `node server.js` directly or adjust your PowerShell execution policy.

## Where to look next

- Express app: `backend/app.js`
- Seed script: `backend/scripts/seedEmployees.js`
- Frontend: `frontend/` (see `frontend/README.md`)
