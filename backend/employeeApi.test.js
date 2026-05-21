const request = require("supertest");
const app = require("../app");

describe("Employee APIs", () => {

    test("GET /employees returns employee list", async () => {
        const response = await request(app)
            .get("/employees");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("POST /employees creates employee", async () => {
        const response = await request(app)
            .post("/employees")
            .send({
                fullName: "Manasa",
                country: "India",
                jobTitle: "Product Manager",
                salary: 80000
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.fullName).toBe("Manasa");
    });

});