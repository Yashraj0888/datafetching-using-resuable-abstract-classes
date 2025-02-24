import { BaseFetcher } from './BaseFetcher';
import { FetcherRegistry } from './FetcherRegistry';

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserFetcher extends BaseFetcher {
  protected type = 'users';
}

// Auto-register the fetcher
const userFetcher = new UserFetcher();
FetcherRegistry.getInstance().register(userFetcher); 