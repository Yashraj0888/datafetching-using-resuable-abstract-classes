import { FetcherRegistry } from '../fetchers/FetcherRegistry';

export function withServerFetching(type: string) {
  return function<P extends { data?: any }>(
    WrappedComponent: React.ComponentType<P>
  ) {
    async function ServerComponent(props: Omit<P, 'data'>) {
      const fetcher = FetcherRegistry.getInstance().getFetcher(type);
      if (!fetcher) {
        throw new Error(`No fetcher found for type: ${type}`);
      }

      try {
        const data = await fetcher.fetch();
        return <WrappedComponent {...(props as P)} data={data} />;
      } catch (error) {
        console.error('Error in server fetching:', error);
        throw error;
      }
    }

    return ServerComponent;
  };
} 