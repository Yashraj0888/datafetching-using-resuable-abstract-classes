// Import fetchers to ensure registration
import '../lib/fetchers';

import { withServerFetching } from '../lib/hoc/withServerFetching';
import UserTable from '../components/UserTable';
import ProductTable from '../components/ProductTable';
import OrderTable from '../components/OrderTable';
import { PageContainer, PageTitle, SectionContainer, SectionTitle } from '../components/SharedStyles';

const ServerUserTable = withServerFetching('users')(UserTable);
const ServerProductTable = withServerFetching('products')(ProductTable);
const ServerOrderTable = withServerFetching('orders')(OrderTable);

export default async function ServerExamplePage() {
  return (
    <PageContainer>
      <PageTitle>Server-Side Fetching Example</PageTitle>
      
      <SectionContainer>
        <SectionTitle>Users</SectionTitle>
        <ServerUserTable />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Products</SectionTitle>
        <ServerProductTable />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Orders</SectionTitle>
        <ServerOrderTable />
      </SectionContainer>
    </PageContainer>
  );
} 

