import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import LoginForm, { LoginFormValues } from './components/auth-forms/login-form'
import { useAuth } from '../context/auth-context' // Import useAuth
import { useLoading } from '../context/loading-context' // Import useLoading
import { useState } from 'react'

const LoginPage: React.FC = () => {
  const router = useRouter()
  const { login } = useAuth()
  const loginURL = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_SIGNIN
  const { setLoading } = useLoading()

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const errorMessages: { [key: number]: string } = {
    401: 'Invalid email or password. Please try again.',
    403: 'Your account is not confirmed yet. Please check your email and confirm your account.',
    404: 'Email or user account does not exist.'
  }

  const defaultErrorMessage = 'An unexpected error occurred. Please try again.'

  const handleLogin = async (formData: LoginFormValues) => {
    setLoading(true)

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
        const isConfirmed = data.user.isConfirmed
        if (!isConfirmed) {
          setLoading(false)
          setErrorMessage(errorMessages[403] || defaultErrorMessage)
          return
        }
        Cookies.set('authToken', data.token)
        login(data.user)
        router.push('/home')

        setTimeout(() => {
          setLoading(false)
        }, 2000)
      } else {
        setLoading(false)
        setErrorMessage(errorMessages[response.status] || defaultErrorMessage)
      }
    } catch (error) {
      console.error('Login error:', error)
      setErrorMessage(defaultErrorMessage)
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen background">
      <div className="flex-1">
        <LoginForm onLogin={handleLogin} errorMessage={errorMessage} />
      </div>
    </div>
  )
}

export default LoginPage
