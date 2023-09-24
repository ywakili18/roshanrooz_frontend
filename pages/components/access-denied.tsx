import { useEffect } from 'react'

const AccessDenied: React.FC = () => {
  useEffect(() => {
    document.title = 'Access Denied'
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-4/5 md:w-2/5 lg:w-1/4 bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4 text-center">
          {/* This can be replaced by an icon */}
          <span className="block w-16 h-16 mx-auto mb-4 bg-red-200 rounded-full p-3">
            <svg
              className="w-10 h-10 text-red-700 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L4.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </span>
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Access Denied
          </h1>
        </div>
        <p className="text-gray-600 text-center">
          Sorry, you don&apos;t have permission to view this page.
        </p>
      </div>
    </div>
  )
}

export default AccessDenied
