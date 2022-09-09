import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

type Props = {}

const MainPage = (props: Props) => {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={(theme) => ({ color: theme.palette.primary.contrastText, marginRight: 4 })}
          >
            Employees App
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex'}}>
            <Button
              sx={{ my: 2, color: '#c3c3c3', '&:hover': { color: 'white' } }}
              onClick={() => navigate('/employees')}
            >
              Empleados
            </Button>
            <Button
              sx={{ my: 2, color: '#c3c3c3', '&:hover': { color: 'white' } }}
              onClick={() => navigate('/upload')}
            >
              Imagenes
            </Button>
          </Box>
          <Button color="inherit" endIcon={<LogoutIcon />} onClick={logout} >Log out</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  )
}

export default MainPage