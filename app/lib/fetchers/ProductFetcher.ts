import { BaseFetcher } from './BaseFetcher';
import { FetcherRegistry } from './FetcherRegistry';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export class ProductFetcher extends BaseFetcher {
  protected type = 'products';
}

// Auto-register the fetcher
const productFetcher = new ProductFetcher();
FetcherRegistry.getInstance().register(productFetcher); 