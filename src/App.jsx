import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

// import {StatsBlock} from './components/StatsBlock.jsx';
// import {EmployeeTable} from './components/EmployeeTable'

import { StatsBlock, EmployeeTable, FilterBar, AddEmployeeForm } from './components';

const employees = [
  { id: 1, name: "Mike", salary: "1000$" },
  { id: 2, name: "Jack", salary: "1200$" },
  { id: 3, name: "John", salary: "800$" },
]

export function App() {
  return (
    <Container maxWidth="md">
      <Stack spacing={3}>
        <StatsBlock />
        <FilterBar />
        <EmployeeTable employees={employees} />
        <AddEmployeeForm />
      </Stack>
    </Container>
  );
}
