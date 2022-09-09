import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { Dayjs } from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import BasicDatePicker from '../components/DatePicker'
import ProductsTable from '../components/EmployeesTable'
import { AppContext } from '../context/AppContext';
import { useFormInput } from '../hooks/useFormInput';
import { RenderedEmployee } from '../interfaces/employees.interface';
import { ProductsService } from '../services/employees.service';

const EmployeesPage = () => {
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
  const [name, handleChangeName, clearName] = useFormInput('');
  const [lastName, handleChangeLastName, clearLastName] = useFormInput('');
  const [employees, setEmployees] = useState<RenderedEmployee[]>([]);
  const productsService = ProductsService.getInstance();
  const { setIsLoading, state } = useContext(AppContext);

  const getValues = async () => {
    setIsLoading(true);
    const data = await productsService.getEmployeesList();
    setIsLoading(false);
    const renderedEmployees = data.data.employees.map<RenderedEmployee>(({ birthday, ...employee}) => ({
      ...employee,
      birthday: new Date(birthday)
    }));
    setEmployees(renderedEmployees);
  }

  useEffect(() => {
    getValues()
  }, [])

  const handleChangeBirthDate = (date: Dayjs | null) => {
    setBirthDate(date);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      const res = await productsService.addEmployee({
        birthday: birthDate!.format('YYYY/MM/DD'),
        last_name: lastName,
        name
      })
      if (res.success) {
        getValues();
        setBirthDate(null);
        clearName();
        clearLastName();
      }
    } catch (error) {
      console.log('Hubo un error')
    }
  }

  return (
    <Box display="flex" gap={5} minHeight={759}>
      <Stack flex={1}>
        <Typography variant="h3" textAlign="center" sx={{ padding: '1rem 0' }}>Empleados</Typography>
        <Stack flex={1} alignItems="center" justifyContent="center">
          {state.isLoading && <CircularProgress size={100} />}
          { employees.length > 0 && <ProductsTable employees={employees} />}
          { employees.length === 0 && !state.isLoading && <Typography variant='h4'>No hay empleados</Typography> }
        </Stack>
      </Stack>
      <Box flex={1} display="flex" flexDirection="column">
        <Typography variant="h3" textAlign="center" sx={{ padding: '1rem 0' }}>Agregar empleado</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          flex={1}
          display="flex"
          flexDirection="column"
          gap={6}
          bgcolor="white"
          padding={3}
          borderRadius={1}
          justifyContent="flex-start"
        >
          <TextField
            variant="standard"
            label="Nombre"
            inputProps={{ maxLength: 30 }}
            value={name}
            onChange={handleChangeName}
            required
          />
          <TextField
            variant="standard"
            label="Apellidos"
            inputProps={{ maxLength: 30 }}
            value={lastName}
            onChange={handleChangeLastName}
            required
          />
          <BasicDatePicker value={birthDate} onChange={handleChangeBirthDate} />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 'auto' }}>Agregar</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default EmployeesPage