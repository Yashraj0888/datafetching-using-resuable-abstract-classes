import { BaseFetcher } from './BaseFetcher';

// FetcherRegistry is a singleton class that manages a collection of BaseFetcher instances.
export class FetcherRegistry {
  // The static instance of FetcherRegistry, ensuring only one instance exists.
  private static instance: FetcherRegistry;
  // A Map to store BaseFetcher instances, keyed by their type.
  private fetchers: Map<string, BaseFetcher> = new Map();

  // Private constructor to prevent direct instantiation.
  private constructor() {}

  // Returns the singleton instance of FetcherRegistry.
  static getInstance(): FetcherRegistry {
    if (!FetcherRegistry.instance) {
      FetcherRegistry.instance = new FetcherRegistry();
    }
    return FetcherRegistry.instance;
  }

  // Registers a BaseFetcher instance with the registry.
  register(fetcher: BaseFetcher): void {
    this.fetchers.set(fetcher.getType(), fetcher);
  }

  // Retrieves a BaseFetcher instance by its type.
  getFetcher(type: string): BaseFetcher | undefined {
    return this.fetchers.get(type);
  }

  // Returns an array of all registered BaseFetcher instances.
  getAllFetchers(): BaseFetcher[] {
    return Array.from(this.fetchers.values());
  }
} 