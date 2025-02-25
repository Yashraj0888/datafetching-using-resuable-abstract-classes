'use client';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Order } from '../lib/fetchers/OrderFetcher';
import { StyledPaper, StyledTableCell, StyledTableRow } from './SharedStyles';

interface OrderTableProps {
  data: { orders: Order[] };
}

function OrderTable({ data }: OrderTableProps) {
  return (
    <StyledPaper elevation={0}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Total Amount</StyledTableCell>
              <StyledTableCell>Order Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.orders.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell>{order.id}</StyledTableCell>
                <StyledTableCell>{order.customerName}</StyledTableCell>
                <StyledTableCell>{order.productName}</StyledTableCell>
                <StyledTableCell>{order.quantity}</StyledTableCell>
                <StyledTableCell>${order.totalAmount.toFixed(2)}</StyledTableCell>
                <StyledTableCell>
                  {new Date(order.orderDate).toLocaleDateString()}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
}

export default OrderTable; 