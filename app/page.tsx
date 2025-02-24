import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            JSON-Based Data Fetching System
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A Next.js 14 application demonstrating server-side and client-side data fetching from JSON files
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Link 
              href="/server-example"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Server-Side Fetching
              </h2>
              <p className="text-gray-600">
                Example of fetching data on the server using Higher-Order Components
              </p>
            </Link>

            <Link 
              href="/client-example"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Client-Side Fetching
              </h2>
              <p className="text-gray-600">
                Example of fetching data on the client using Higher-Order Components
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
