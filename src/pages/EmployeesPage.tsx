import { Typography } from '@mui/material'
import ProductsTable from '../components/EmployeesTable'

const EmployeesPage = () => {
  return (
    <>
      <Typography variant="h3" textAlign="center" sx={{ padding: '1rem 0' }}>Empleados</Typography>
      <ProductsTable />
      <Typography variant="h3" textAlign="center" sx={{ padding: '1rem 0' }}>Agregar empleado</Typography>
    </>
  )
}

export default EmployeesPage