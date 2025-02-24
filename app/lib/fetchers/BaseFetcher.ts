export abstract class BaseFetcher {
  protected abstract type: string;

  async fetch(): Promise<any> {
    try {
      // Use absolute URL for server-side fetching
      const baseUrl = typeof window === 'undefined' 
        ? 'http://localhost:3000' // Server-side
        : ''; // Client-side (relative URL)

      const response = await fetch(`${baseUrl}/api/data?type=${this.type}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${this.type} data`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${this.type} data:`, error);
      throw error;
    }
  }

  getType(): string {
    return this.type;
  }
} 