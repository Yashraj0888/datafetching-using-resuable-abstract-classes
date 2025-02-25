/**
 * Abstract base class for handling data fetching operations
 * Provides a reusable template for different types of data fetchers
 */
export abstract class BaseFetcher {
  // Abstract type property that must be implemented by child classes
  // Defines the specific data type being fetched (e.g., 'users', 'posts', etc.)
  protected abstract type: string;

  /**
   * Main fetch method to retrieve data
   * Handles both server-side and client-side fetching scenarios
   * @returns Promise containing the fetched data
   */
  async fetch(): Promise<any> {
    try {
      // Determine the base URL based on execution environment
      // Server-side requires absolute URL, client-side can use relative
      const baseUrl = typeof window === 'undefined' 
        ? 'http://localhost:3000' // Use absolute URL for server-side
        : '';                     // Use relative URL for client-side

      // Make the API request with the specific type parameter
      const response = await fetch(`${baseUrl}/api/data?type=${this.type}`);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Failed to fetch ${this.type} data`);
      }

      // Parse and return the JSON response
      return await response.json();
    } catch (error) {
      // Log and re-throw any errors that occur during fetching
      console.error(`Error fetching ${this.type} data:`, error);
      throw error;
    }
  }

  /**
   * Getter method to retrieve the fetcher type
   * @returns The type of data being fetched
   */
  getType(): string {
    return this.type;
  }
}
