import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// столько импортов у меня автоматом раширения mui делает, а так всё было диструрезовано как ниже ^_^

import { FaTrash, FaEdit, FaCookie } from "react-icons/fa";

import './index.css'

const employees = [
  { name: "Mike", salary: "1000$" },
  { name: "Jack", salary: "1200$" },
  { name: "John", salary: "800$" },
];

export function App() {

  return (
    <Container maxWidth='md'>
      <Stack spacing={3}>
        <Box>
          <Typography>Общие число сотредников: </Typography>
          <Typography>Получат премию: </Typography>
        </Box>
        <Box>
          <TextField></TextField>
          <Box>
            <Button>Все сотрудники</Button>
            <Button>На повышение</Button>
            <Button>ЗП больше 1000$</Button>
          </Box>
        </Box>
        <Box>
          <Table>
              {
                employees.map((item) => {
                  return (
                    <TableRow>
                      <TableCell width='50%'><Button>{item.name}</Button></TableCell>
                      <TableCell width='25%'>{item.salary}</TableCell>
                      <TableCell width='15%'>
                        <Stack direction="row" spacing={1}>
                          <FaCookie />
                          <FaTrash />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
          </Table>
        </Box>
        <Box>
          <Typography>Добавить нового сотрудника</Typography>
          <Stack direction="row" spacing={2}>
            <TextField label='Имя'></TextField>
            <TextField label='ЗП в $'></TextField>
            <Button>Добавить</Button>
          </Stack>
        </Box>

      </Stack>
    </Container>
  )
}
