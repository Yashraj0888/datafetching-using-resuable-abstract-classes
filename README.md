# JSON-Based Data Fetching System

A modern Next.js 14 application demonstrating advanced data fetching patterns using JSON files, Higher-Order Components (HOCs), and a dynamic fetcher registry system.

## 🚀 Features

- **Server-Side and Client-Side Fetching**: Demonstrates both SSR and CSR data fetching patterns
- **Higher-Order Components**: Reusable HOCs for data fetching logic
- **Dynamic Fetcher Registry**: Automated registration of data fetchers
- **Material UI Integration**: Beautiful and responsive UI components
- **TypeScript Support**: Full type safety throughout the application
- **Modern Styling**: Using MUI styled components with a professional design

## 📋 Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yashraj-0888/datafetching-using-resuable-abstract-classes.git
cd datafetching-using-resuable-abstract-classes
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.


## 🔍 Core Components

### 1. Fetcher System

#### BaseFetcher
```typescript
abstract class BaseFetcher {
  protected abstract type: string;
  async fetch(): Promise<any>;
  getType(): string;
}
```

#### FetcherRegistry
- Singleton pattern implementation
- Automatic fetcher registration
- Type-safe fetcher retrieval

### 2. Higher-Order Components

#### withServerFetching
- Server-side data fetching
- Automatic fetcher resolution
- Type-safe props injection

#### withClientFetching
- Client-side data fetching with React hooks
- Loading and error state management
- Automatic fetcher resolution

### 3. Data Tables

- Material UI-based tables
- Responsive design
- Type-safe data display
- Consistent styling across components

## 📊 Data Structure

### Users
```json
{
  "users": [
    {
      "id": number,
      "name": string,
      "email": string
    }
  ]
}
```

### Products
```json
{
  "products": [
    {
      "id": number,
      "name": string,
      "price": number,
      "stock": number
    }
  ]
}
```

### Orders
```json
{
  "orders": [
    {
      "id": number,
      "customerName": string,
      "productName": string,
      "quantity": number,
      "totalAmount": number,
      "orderDate": string
    }
  ]
}
```

## 🔄 Data Flow

1. **Server-Side Fetching**:
   - Data is fetched during server-side rendering
   - Results are passed directly to components
   - No client-side loading states

2. **Client-Side Fetching**:
   - Data is fetched after component mount
   - Loading and error states are managed
   - Dynamic updates are possible

## 🎨 Styling System

- Material UI styled components
- Responsive design patterns
- Consistent color scheme
- Professional typography
- Interactive hover effects
- Mobile-first approach

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🛠️ API Routes

### GET /api/data
Query Parameters:
- `type`: The type of data to fetch (users/products/orders)

Response Format:
```typescript
{
  [type]: Array<User | Product | Order>
}
```

## 🔒 Security Considerations

- No sensitive data in JSON files
- Server-side validation of data types
- Error handling for missing files
- Type safety throughout the application

## 🧪 Best Practices

1. **Code Organization**:
   - Clear separation of concerns
   - Modular component structure
   - Type-safe implementations
   - Reusable patterns

2. **Performance**:
   - Server-side rendering where appropriate
   - Client-side fetching for dynamic data
   - Optimized component rendering
   - Efficient data fetching

3. **Maintainability**:
   - Consistent code style
   - Clear documentation
   - Type safety
   - Modular architecture

## 📚 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production version
- `npm start`: Run production server
- `npm run lint`: Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Material UI for the component library
- TypeScript team for type safety
- The open-source community

## 📧 Contact

For questions and support, please open an issue in the repository.
