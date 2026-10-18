export function filterEmployees(employees, filter) {
    switch (filter) {
        case "promotion":
            return employees.filter((employee) => employee.promotion);

        case "salary":
            return employees.filter((employee) => employee.salary > 1000);

        case "all":
            return employees;

        default:
            return employees;
    }
}