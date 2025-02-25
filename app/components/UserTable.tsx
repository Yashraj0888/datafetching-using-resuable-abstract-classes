'use client';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { User } from '../lib/fetchers/UserFetcher';
import { StyledPaper, StyledTableCell, StyledTableRow } from './SharedStyles';

interface UserTableProps {
  data: { users: User[] };
}

function UserTable({ data }: UserTableProps) {
  return (
    <StyledPaper elevation={0}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell>{user.id}</StyledTableCell>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
}

export default UserTable; 