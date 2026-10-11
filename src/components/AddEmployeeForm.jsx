import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function AddEmployeeForm() {
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
