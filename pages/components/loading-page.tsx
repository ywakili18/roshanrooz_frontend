import React from 'react'
import Image from 'next/image'

const LoadingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#DB636F]">
      <div className="flex flex-col items-center slide-in-fade">
        <div className="mb-4">
          <Image
            src="/heart.svg"
            alt="Loading Image"
            width={128}
            height={128}
            layout="responsive"
          />
        </div>

        <h2 className="text-[#FCF9DA]">Bringing your moments to light...</h2>
      </div>

      <style jsx>{`
        @keyframes slideInFade {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .slide-in-fade {
          animation: slideInFade 1s forwards;
        }
      `}</style>
    </div>
  )
}

export default LoadingPage
