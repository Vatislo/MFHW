import { employees } from '../data/employees'

export function Heading() {
    return (
        <div className="logical-block">
            <h1>Учёт сотрудников компании №<span></span></h1>
            <h2>Общие число сотрудников: <span>{employees.length}</span></h2>
            <h2>Число сотрудников получившие премию: <span>{employees.filter(employee => employee.bonus === true).length}</span></h2>
        </div>
    )
}
