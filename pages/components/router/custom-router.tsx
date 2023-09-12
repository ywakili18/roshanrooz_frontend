import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../context/auth-context';
import { useContext } from 'react';
const CustomRouter: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;  // <-- This ensures no routing decisions are made while still loading.

    const authenticatedRoutes = ['/home']; 
    const unauthenticatedRoutes = ['/login', '/register', '/'];
    const currentRoute = router.pathname;
    const userIsAuthenticated = isAuthenticated(); 
  
    if (!userIsAuthenticated && authenticatedRoutes.includes(currentRoute)) {
      router.push('/login');
    }
  
    if (userIsAuthenticated && unauthenticatedRoutes.includes(currentRoute)) {
      router.push('/home');
    }
  }, [isAuthenticated, router, router.pathname, loading]);  // <-- Ensure loading is a dependency here.
  

  // Render the children
  return <>{children}</>;
};


export default CustomRouter;
