'use client';

import { useEffect, useState } from 'react';
import { FetcherRegistry } from '../fetchers/FetcherRegistry';

export function withClientFetching(type: string) {
  return function<P extends { data?: any }>(
    WrappedComponent: React.ComponentType<P>
  ) {
    return function ClientComponent(props: Omit<P, 'data'>) {
      const [data, setData] = useState<any>(null);
      const [error, setError] = useState<Error | null>(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const fetcher = FetcherRegistry.getInstance().getFetcher(type);
            if (!fetcher) {
              throw new Error(`No fetcher found for type: ${type}`);
            }

            const result = await fetcher.fetch();
            setData(result);
          } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error'));
          } finally {
            setLoading(false);
          }
        };

        fetchData();
      }, []);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
      
      return <WrappedComponent {...(props as P)} data={data} />;
    };
  };
} 