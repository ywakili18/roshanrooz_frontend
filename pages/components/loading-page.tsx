import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLoading } from '../../context/loading-context'

const LoadingPage: React.FC = () => {
  const { loading } = useLoading()
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (loading) {
      timer = setTimeout(() => {
        setShow(true)
      }, 100)
    } else {
      setShow(false)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [loading])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-textAccent z-50">
      <div className="fade-in-scale-up flex flex-col items-center">
        <div className="mb-4">
          <Image
            src="/sunshine.svg"
            alt="Loading Image"
            width={128}
            height={128}
            layout="responsive"
          />
        </div>
        <h2 className="text-secondary">Bringing your moments to light...</h2>
      </div>

      <style jsx>{`
        @keyframes fadeInScaleUp {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .fade-in-scale-up {
          animation: fadeInScaleUp 1s forwards;
        }
      `}</style>
    </div>
  )
}

export default LoadingPage
