import { BaseFetcher } from './BaseFetcher';
import { FetcherRegistry } from './FetcherRegistry';

export interface Order {
  id: number;
  customerName: string;
  productName: string;
  quantity: number;
  totalAmount: number;
  orderDate: string;
}

export class OrderFetcher extends BaseFetcher {
  protected type = 'orders';
}

// Auto-register the fetcher
const orderFetcher = new OrderFetcher();
FetcherRegistry.getInstance().register(orderFetcher); 