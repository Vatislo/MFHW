import { Box, Button, Stack, TextField, Typography } from '@mui/material'

export function AddEmployeeForm() {
  return (
    <Box>
      <Typography>Добавить нового сотрудника</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Имя" />
        <TextField label="ЗП в $" />
        <Button>Добавить</Button>
      </Stack>
    </Box>
  );
}
