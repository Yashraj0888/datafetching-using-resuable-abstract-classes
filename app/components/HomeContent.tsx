'use client';

import Link from 'next/link';
import { styled } from '@mui/material/styles';

const HomeContainer = styled('div')({
  minHeight: '100vh',
  backgroundColor: '#f8fafc',
  padding: '3rem 1rem',
});

const ContentContainer = styled('div')({
  maxWidth: '1280px',
  margin: '0 auto',
});

const Header = styled('div')({
  textAlign: 'center',
  marginBottom: '3rem',
});

const Title = styled('h1')({
  fontSize: '3rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '1rem',
  '@media (max-width: 640px)': {
    fontSize: '2.25rem',
  },
});

const Subtitle = styled('p')({
  fontSize: '1.25rem',
  color: '#64748b',
  maxWidth: '42rem',
  margin: '0 auto',
  lineHeight: 1.6,
});

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  '@media (max-width: 640px)': {
    gridTemplateColumns: '1fr',
  },
});

const Card = styled(Link)({
  display: 'block',
  backgroundColor: '#ffffff',
  borderRadius: '1rem',
  padding: '2rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
});

const CardTitle = styled('h2')({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#1e293b',
  marginBottom: '1rem',
});

const CardDescription = styled('p')({
  fontSize: '1rem',
  color: '#64748b',
  lineHeight: 1.5,
});

export default function HomeContent() {
  return (
    <HomeContainer>
      <ContentContainer>
        <Header>
          <Title>JSON-Based Data Fetching System</Title>
          <Subtitle>
            A Next.js 14 application demonstrating server-side and client-side data fetching from JSON files
          </Subtitle>
        </Header>

        <Grid>
          <Card href="/server-example">
            <CardTitle>Server-Side Fetching</CardTitle>
            <CardDescription>
              Experience data fetching directly from the server using Higher-Order Components,
              providing optimal performance and SEO benefits.
            </CardDescription>
          </Card>

          <Card href="/client-example">
            <CardTitle>Client-Side Fetching</CardTitle>
            <CardDescription>
              Explore dynamic data loading on the client side using Higher-Order Components,
              perfect for interactive and real-time applications.
            </CardDescription>
          </Card>
        </Grid>
      </ContentContainer>
    </HomeContainer>
  );
} 