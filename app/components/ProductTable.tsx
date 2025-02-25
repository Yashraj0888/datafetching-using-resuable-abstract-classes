'use client';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Product } from '../lib/fetchers/ProductFetcher';
import { StyledPaper, StyledTableCell, StyledTableRow } from './SharedStyles';

interface ProductTableProps {
  data: { products: Product[] };
}

function ProductTable({ data }: ProductTableProps) {
  return (
    <StyledPaper elevation={0}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Stock</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.products.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell>{product.id}</StyledTableCell>
                <StyledTableCell>{product.name}</StyledTableCell>
                <StyledTableCell>${product.price.toFixed(2)}</StyledTableCell>
                <StyledTableCell>{product.stock}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
}

export default ProductTable; 