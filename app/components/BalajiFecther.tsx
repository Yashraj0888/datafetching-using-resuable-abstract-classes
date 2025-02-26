'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { StyledPaper } from './SharedStyles';
import { Balaji } from '../lib/fetchers/BalajiFetcher';

interface BalajiFetcherProps {
  data?: {
    balaji: Balaji[];
  };
}

export default function BalajiTable({ data }: BalajiFetcherProps) {
  if (!data?.balaji) {
    return <div>No data available</div>;
  }

  return (
    <StyledPaper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.balaji.map((person, index) => (
              <TableRow key={index}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.city}</TableCell>
                <TableCell>{person.country}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
}
