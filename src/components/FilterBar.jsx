import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function FilterBar() {
  return (
    <Box>
      <TextField />
      <Box>
        <Button>Все сотрудники</Button>
        <Button>На повышение</Button>
        <Button>ЗП больше 1000$</Button>
      </Box>
    </Box>
  );
}
