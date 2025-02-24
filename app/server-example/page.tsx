// Import fetchers to ensure registration
import '../lib/fetchers';

import { withServerFetching } from '../lib/hoc/withServerFetching';
import UserTable from '../components/UserTable';
import ProductTable from '../components/ProductTable';

const ServerUserTable = withServerFetching('users')(UserTable);
const ServerProductTable = withServerFetching('products')(ProductTable);

export default async function ServerExamplePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Server-Side Fetching Example</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <ServerUserTable />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <ServerProductTable />
      </div>
    </div>
  );
} 