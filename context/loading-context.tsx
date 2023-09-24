import React, { createContext, useContext, useState, ReactNode } from 'react'

interface LoadingContextType {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [loading, setLoading] = useState(false)

  const showLoading = () => setLoading(true)
  const hideLoading = () => setLoading(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
