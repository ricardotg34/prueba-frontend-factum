import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductsService } from '../services/products.service';
import { BeerProduct } from '../interfaces/beer-products-response.interface';
import { styled } from '@mui/material';
import { currencyFormat } from '../utills';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#A6A6A7',
    ...theme.typography.h5
  },
  [`&.${tableCellClasses.body}`]: {
    ...theme.typography.h5,
    color: '#565657'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductsTable() {
  const [products, setProducts] = useState<BeerProduct[]>([]);
  const productsService = ProductsService.getInstance();

  const getValues = async () => {
    const data = await productsService.getBeerProducts();
    setProducts(data);
  }

  useEffect(() => {
    getValues()
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center" colSpan={2}>Nombre</StyledTableCell>
            <StyledTableCell align="center">Sku</StyledTableCell>
            <StyledTableCell align="center">% Presencia</StyledTableCell>
            <StyledTableCell align="center">Av. Price</StyledTableCell>
            <StyledTableCell align="center">Av. Position</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow
              key={row.id}
            >
              <StyledTableCell align="center">
                <img src={row.productImage} alt="Image" height={130} />
              </StyledTableCell>
              <StyledTableCell align="center" >{row.name}</StyledTableCell>
              <StyledTableCell align="center" >{row.sku}</StyledTableCell>
              <StyledTableCell
                align="center"
                sx={(theme) => ({color: `${row.persistence >= 0 ? theme.palette.success.main : theme.palette.error.main} !important` })}
              >
                {Math.abs(row.persistence) * 100} %
              </StyledTableCell>
              <StyledTableCell align="center" >{currencyFormat.format(row.averagePrice)}</StyledTableCell>
              <StyledTableCell align="center" >{row.averagePosition}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
