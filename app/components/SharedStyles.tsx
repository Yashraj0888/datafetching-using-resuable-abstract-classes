'use client';

import { styled } from '@mui/material/styles';
import { Paper, TableCell, TableRow } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  overflow: 'hidden',
  '& .MuiTableContainer-root': {
    borderRadius: '12px',
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#f8fafc',
    color: '#1e293b',
    fontWeight: 600,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '16px',
  },
  '&.MuiTableCell-body': {
    fontSize: '0.875rem',
    color: '#475569',
    padding: '16px',
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f8fafc',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: '#f1f5f9',
    transition: 'background-color 0.2s ease',
  },
}));

export const PageContainer = styled('div')({
  padding: '2rem',
  maxWidth: '1280px',
  margin: '0 auto',
  '@media (max-width: 640px)': {
    padding: '1rem',
  },
});

export const SectionContainer = styled('div')({
  marginBottom: '2rem',
  '&:last-child': {
    marginBottom: 0,
  },
});

export const PageTitle = styled('h1')({
  fontSize: '2.25rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '2rem',
  textAlign: 'center',
  '@media (max-width: 640px)': {
    fontSize: '1.875rem',
  },
});

export const SectionTitle = styled('h2')({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#334155',
  marginBottom: '1rem',
  '@media (max-width: 640px)': {
    fontSize: '1.25rem',
  },
}); 