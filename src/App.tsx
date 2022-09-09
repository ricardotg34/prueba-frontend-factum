import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import AppContextProvider from './context/AppContextProvider'
import EmployeesPage from './pages/EmployeesPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import UploadPage from './pages/UploadPage'
import { theme } from './styles/theme'

function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='/' element={<PrivateRoute><MainPage /></PrivateRoute>} >
              <Route path='/' element={<Navigate to="/employees" replace={true} />} />
              <Route path='employees' element={<EmployeesPage />} />
              <Route path='upload' element={<UploadPage />} />
            </Route>
            <Route path='*' element={<Navigate to="/employees" replace={true} />} />
          </Routes>
        </ThemeProvider>
      </AppContextProvider>
    </BrowserRouter >
  )
}
export default App;