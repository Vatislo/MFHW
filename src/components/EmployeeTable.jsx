import Table from '@mui/material/Table'
import EmployeeRow from './EmployeeRow.jsx'

export default function EmployeeTable({ employees }) {
  return (
    <Table>
      {
        employees.map((item) => {
          return (
            <EmployeeRow employee={item} />
          )
        })
      }
    </Table>
  );
}
