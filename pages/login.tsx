import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import LoginForm, { LoginFormValues } from './components/auth-forms/login'
import { useAuth } from '../context/auth-context' // Import useAuth
import { useLoading } from '../context/loading-context' // Import useLoading

const LoginPage: React.FC = () => {
  const router = useRouter()
  const { login } = useAuth()
  const loginURL = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_SIGNIN

  const { setLoading } = useLoading()

  const handleLogin = async (formData: LoginFormValues) => {
    setLoading(true) // Start the loading process

    try {
      const response = await fetch(`${loginURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const data = await response.json()
        Cookies.set('authToken', data.token)
        login(data.user)
        router.push('/home')
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  )
}

export default LoginPage
