import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AuthProvider } from '../context/auth-context'
import CustomRouter from '../router/custom-router'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { LoadingProvider, useLoading } from '@/context/loading-context'
import '../app/globals.css'
import LoadingPage from './components/loading-page'
const Content: React.FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps
}) => {
  const { loading } = useLoading()

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
