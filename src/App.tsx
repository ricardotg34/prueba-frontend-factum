import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import EmployeesPage from './pages/EmployeesPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import UploadPage from './pages/UploadPage'
import { theme } from './styles/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<MainPage />} >
            <Route path='/' element={<Navigate to="/employees" replace={true} />} />
            <Route path='employees' element={<EmployeesPage />} />
            <Route path='upload' element={<UploadPage />} />
            <Route path='*' element={<Navigate to="/employees" replace={true} />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </ThemeProvider>
  )
}
export default App;