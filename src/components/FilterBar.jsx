import { Box, Button, TextField } from '@mui/material'

export function FilterBar() {
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
