const {
    getTotalSalary
} = require("../utils/salaryUtils");

describe("Salary Utils", () => {

    test("calculates total salary", () => {

        const employees = [
            { salary: 10000 },
            { salary: 20000 }
        ];

        expect(
            getTotalSalary(employees)
        ).toBe(30000);

    });

});