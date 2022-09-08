import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductsService } from '../services/employees.service';
import { alpha, styled } from '@mui/material';
import { formatDate } from '../utills';
import { RenderedEmployee } from '../interfaces/employees.interface';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.h5,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    ...theme.typography.h5,
    color: '#565657'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: alpha(theme.palette.primary.light, 0.2),
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductsTable() {
  const [employees, setEmployees] = useState<RenderedEmployee[]>([]);
  const productsService = ProductsService.getInstance();

  const getValues = async () => {
    const data = await productsService.getEmployeesList();
    const renderedEmployees = data.data.employees.map<RenderedEmployee>(({ birthday, ...employee}) => ({
      ...employee,
      birthday: new Date(birthday)
    }));
    setEmployees(renderedEmployees);
  }

  useEffect(() => {
    getValues()
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center" />
            <StyledTableCell align="center">Nombre (s)</StyledTableCell>
            <StyledTableCell align="center">Apellido (s)</StyledTableCell>
            <StyledTableCell align="center">Fecha de nacimiento</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {employees.map((row) => (
            <StyledTableRow
              key={row.id}
            >
              <StyledTableCell align="center">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center" >{row.name}</StyledTableCell>
              <StyledTableCell align="center" >{row.last_name}</StyledTableCell>
              <StyledTableCell align="center" >{formatDate(row.birthday)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
