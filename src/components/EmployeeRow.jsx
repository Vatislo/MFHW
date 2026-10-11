import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { FaTrash, FaCookie } from 'react-icons/fa'

export default function EmployeeRow({ employee }) {
  return (
    <TableRow>
      <TableCell width="50%"><Button>{employee.name}</Button></TableCell>
      <TableCell width="25%">{employee.salary}</TableCell>
      <TableCell width="15%">
        <Stack direction="row" spacing={1}>
          <FaCookie />
          <FaTrash />
        </Stack>
      </TableCell>
    </TableRow>
  );
}
