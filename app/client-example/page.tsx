'use client';

// Import fetchers to ensure registration
import '../lib/fetchers';

import { withClientFetching } from '../lib/hoc/withClientFetching';
import UserTable from '../components/UserTable';
import ProductTable from '../components/ProductTable';
import OrderTable from '../components/OrderTable';
import { PageContainer, PageTitle, SectionContainer, SectionTitle } from '../components/SharedStyles';

const ClientUserTable = withClientFetching('users')(UserTable);
const ClientProductTable = withClientFetching('products')(ProductTable);
const ClientOrderTable = withClientFetching('orders')(OrderTable);

export default function ClientExamplePage() {
  return (
    <PageContainer>
      <PageTitle>Client-Side Fetching Example</PageTitle>
      
      <SectionContainer>
        <SectionTitle>Users</SectionTitle>
        <ClientUserTable />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Products</SectionTitle>
        <ClientProductTable />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Orders</SectionTitle>
        <ClientOrderTable />
      </SectionContainer>
    </PageContainer>
  );
} 