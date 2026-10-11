import StatsBlock from './components/StatsBlock.jsx';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import './index.css'

const employees = [
  { name: "Mike", salary: "1000$" },
  { name: "Jack", salary: "1200$" },
  { name: "John", salary: "800$" },
]

import FilterBar from './components/FilterBar.jsx';
import EmployeeTable from './components/EmployeeTable.jsx';
import AddEmployeeForm from './components/AddEmployeeForm.jsx';

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
