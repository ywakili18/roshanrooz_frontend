import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-gray-500">Loading...</h2>
      </div>
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          animation: spinner 1s linear infinite;
        }

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
