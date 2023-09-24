import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../context/auth-context'
import { useLoading } from '../context/loading-context'
import { useState } from 'react'
import GeneralAuthForm from './components/auth-forms/auth-form'

const LoginPage: React.FC = () => {
  const router = useRouter()
  const { login } = useAuth()
  const { setLoading } = useLoading()
  const loginURL = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_LOGIN
  const confirmEmailURL = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_CONFIRM_EMAIL
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  type LoginFormValues = {
    email: string
    hashedPassword: string
  }
  useEffect(() => {
    const { token } = router.query
    if (token) {
      const confirmEmail = async () => {
        try {
          const response = await fetch(`${confirmEmailURL}${token}`, {
            method: 'GET'
          })

          if (response.ok) {
            setSuccessMessage(
              'Your email has been successfully confirmed. Please log in.'
            )
          } else {
            const errData = await response.json()
            setErrorMessage(errData.message || defaultErrorMessage)
          }
        } catch (error) {
          console.error('Email confirmation error:', error)
          setErrorMessage(defaultErrorMessage)
        }
      }
      confirmEmail()
    }
  }, [router.query, confirmEmailURL])

  const handleResendConfirmation = async () => {
    try {
      const email = localStorage.getItem('email')
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_RESEND_CONFIRMATION}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        }
      )
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Could not resend confirmation email.')
      }
      setSuccessMessage('Confirmation email resent. Please check your inbox.')
    } catch (error) {
      setErrorMessage(
        'An error occurred when trying to resend the confirmation email.'
      )
    }
  }

  const errorMessages: { [key: number]: string } = {
    401: 'Invalid email or password. Please try again.',
    403: 'Your account is not confirmed yet. Please check your email and confirm your account.',
    404: 'Email or user account does not exist.',
    429: 'Too many login attempts. Please try again after 15 minutes.'
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
        setTimeout(() => {
          setLoading(false)
          router.push('/home')
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
    <div className="min-h-screen">
      <GeneralAuthForm
        inputs={[
          {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            required: true
          },
          {
            type: 'password',
            name: 'hashedPassword',
            placeholder: 'Password',
            required: true
          }
        ]}
        onSubmit={handleLogin}
        onResendConfirmation={handleResendConfirmation}
        errorMessage={errorMessage}
        title="Every day is a new page"
        subTitle="Log in to begin"
        buttonText="Log in"
        primaryLink="/register"
        primaryLinkText="New to Roshan Rooz?"
        primaryLinkTextSubheader="Sign up here"
        secondaryLink="/forgot-password"
        secondaryLinkText="Forgot your password?"
        secondaryLinkTextSubheader="Reset it here"
        successMessage={successMessage}
      />
    </div>
  )
}

export default LoginPage
