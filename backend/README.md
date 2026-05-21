# Salary Management Backend

A simple Express backend for the Salary Management app.

## Overview

This backend provides endpoints to manage employee data and summary statistics.
It uses an in-memory data store and is intended for local development.

## Requirements

- Node.js 18+ or compatible
- npm

## Install

```bash
cd backend
npm install
```

## Run

```bash
npm run dev
```

The server starts on `http://localhost:5000`.

## API Endpoints

- `GET /employees`
  - Returns the current list of employees.
- `GET /summary`
  - Returns summary statistics:
    - `totalEmployees`
    - `totalSalary`
    - `averageSalary`
- `POST /employees`
  - Creates a new employee record.
  - Expected JSON body:
    ```json
    {
      "fullName": "Name",
      "country": "Country",
      "jobTitle": "Role",
      "salary": 50000
    }
    ```
- `DELETE /employees/:id`
  - Deletes the employee with the given `id`.

## Notes

- Data is stored in memory and will reset when the server restarts.
- CORS is enabled to allow the frontend to connect.
- This backend is intended to be used together with the frontend app in `../frontend`.
