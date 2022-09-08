import { Box, Button, TextField, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      display="flex"
      minHeight="inherit"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: (theme) => `linear-gradient(-70deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark});`
      }}
    >
      <Box
        gap={3}
        display="flex"
        flexDirection="column"
        border="1px solid black"
        borderRadius={5}
        boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2);"
        padding="30px 60px"
        minWidth={500}
        bgcolor="white"
      >
        <Typography variant="h3" textAlign="center" sx={{ paddingBottom: 8 }}>Iniciar Sesión</Typography>
        <TextField label="Usuario" variant="standard" placeholder="Tu nombre de usuario" />
        <TextField label="Contraseña" variant="standard" placeholder="Tu contraseña" />
        <Button variant="contained" color="primary" sx={{ marginTop: 4 }} >Ingresar</Button>
      </Box>
    </Box>
  )
}

export default LoginPage