import { BaseFetcher } from './BaseFetcher';
import { FetcherRegistry } from './FetcherRegistry';

export interface Balaji {
  name: string;
  age: number;
  city: string;
  country: string;
  email: string;
  phone: string;
}

export class BalajiFetcher extends BaseFetcher {
  protected type = 'balaji';
}

// Create and register the fetcher instance
const balajiFetcher = new BalajiFetcher();
FetcherRegistry.getInstance().register(balajiFetcher);

// Export the instance
export default balajiFetcher; 