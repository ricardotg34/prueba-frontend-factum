import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { alpha, styled, TablePagination } from '@mui/material';
import { formatDate } from '../utills';
import { RenderedEmployee } from '../interfaces/employees.interface';

interface ProductsTableProps {
  employees: RenderedEmployee[];
  rowsPerPage?: number;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.h5,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    ...theme.typography.body1,
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

export default function ProductsTable({ employees, rowsPerPage = 10 }: ProductsTableProps) {
  const [renderedEmployees, setRenderedEmployees] = useState<RenderedEmployee[]>([])
  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    setRenderedEmployees(employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
  }, [page, employees])

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
          {renderedEmployees.map((row) => (
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
      <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          labelRowsPerPage="Empleados por página"
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
    </TableContainer>
  );
}
