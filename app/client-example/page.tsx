'use client';

// Import fetchers to ensure registration
import '../lib/fetchers';

import { withClientFetching } from '../lib/hoc/withClientFetching';
import UserTable from '../components/UserTable';
import ProductTable from '../components/ProductTable';

const ClientUserTable = withClientFetching('users')(UserTable);
const ClientProductTable = withClientFetching('products')(ProductTable);

export default function ClientExamplePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Client-Side Fetching Example</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <ClientUserTable />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <ClientProductTable />
      </div>
    </div>
  );
} 