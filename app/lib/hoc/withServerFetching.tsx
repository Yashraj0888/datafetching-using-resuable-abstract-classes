import { FetcherRegistry } from '../fetchers/FetcherRegistry';

/**
 * Higher-order component (HOC) that fetches data from the server and injects it into the wrapped component as a prop.
 *
 * @param {string} type - The type of fetcher to use for data fetching.
 * @returns {Function} A function that takes a component and returns a new component with server fetching capabilities.
 *
 * @template P - The props type of the wrapped component. It must include an optional `data` property.
 *
 * @throws {Error} If no fetcher is found for the specified type.
 *
 * @example
 * ```tsx
 * const MyComponentWithServerFetching = withServerFetching('myType')(MyComponent);
 * ```
 */
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