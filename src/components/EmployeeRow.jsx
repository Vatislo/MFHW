import { Button, Stack, TableCell, TableRow } from '@mui/material'
import { FaTrash, FaCookie } from 'react-icons/fa'

export function EmployeeRow({ employee }) {
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
