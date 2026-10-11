import Table from '@mui/material/Table';
import { EmployeeRow } from './EmployeeRow.jsx'

export function EmployeeTable({ employees }) {
  return (
    <Table>
      {
        employees.map((item) => {
          return (
            <EmployeeRow key={item.id} employee={item} />
          )
        })
      }
    </Table>
  );
}
