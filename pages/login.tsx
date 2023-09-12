
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import LoginForm, { LoginFormValues } from './components/auth-forms/login';
import { useAuth } from '../context/auth-context'; // Import useAuth

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth(); // Get the login function from the authentication context
  const loginURL = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_SIGNIN;

  const handleLogin = async (formData: LoginFormValues) => {
    try {
      const response = await fetch(`${loginURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        Cookies.set('authToken', data.token);
        login(data.user); 

        router.push('/home'); 
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
