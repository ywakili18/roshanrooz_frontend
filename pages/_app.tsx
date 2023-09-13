// pages/_app.tsx
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthProvider } from '../context/auth-context'
import CustomRouter from '../router/custom-router'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LoadingPage from './components/loading-page'
import { LoadingProvider, useLoading } from '@/context/loading-context'
import '../app/globals.css'

const Content: React.FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps
}) => {
  const router = useRouter()
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setTimeout(() => setLoading(false), 500)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [setLoading, router.events])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {loading ? <LoadingPage /> : <Component {...pageProps} />}
      <Footer />
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LoadingProvider>
        <CustomRouter>
          <Content Component={Component} pageProps={pageProps} />
        </CustomRouter>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default MyApp
