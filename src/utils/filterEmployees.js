export function filterEmployees(employees, filter) {
    switch (filter) {
        case "bonus":
            return employees.filter((employee) => employee.bonus);
            
        case "salary":
            return employees.filter((employee) => employee.salary >= 1000);

        case "all":
            return employees;

        default:
            return employees;
    }
}