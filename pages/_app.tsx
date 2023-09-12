// pages/_app.tsx
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth-context';
import CustomRouter from '../pages/components/router/custom-router'; // Import the CustomRouter component
import Navbar from './components/navbar';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CustomRouter>
        <Navbar/>
        <Component {...pageProps} />
      </CustomRouter>
    </AuthProvider>
  );
}

export default MyApp;
