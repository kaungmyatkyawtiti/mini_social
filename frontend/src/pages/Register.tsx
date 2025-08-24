import { Alert, Box, Button, TextField, Typography } from '@mui/material'

export default function Register() {
  return (
    <Box>
      <Typography variant='h3'>Register</Typography>

      <Alert severity='warning' sx={{ mt: 2 }}>All Fields required</Alert>

      <form>
        <Box>
          <TextField placeholder="Name" fullWidth />
          <TextField placeholder="Username" fullWidth />
          <TextField placeholder="Bio" fullWidth />
          <TextField type="password" placeholder="Password" fullWidth />
          <Button
            type="submit"
            variant="contained"
            fullWidth
          >
            Register
          </Button>
        </Box>
      </form >
    </Box >
  )
}
