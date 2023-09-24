import { useRouter } from 'next/router'
import { useState } from 'react'
import GeneralAuthForm from './components/auth-forms/auth-form'

const Register: React.FC = () => {
  const signUpUrl = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_SIGNUP
  const router = useRouter()

  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const errorMessages: { [key: number]: string } = {
    409: 'This email already exists. Please log in or use another email.',
    429: 'Too many registration attempts. Please try again after an hour.'
  }

  const defaultErrorMessage = 'An unexpected error occurred. Please try again.'
  type RegistrationFormData = {
    name: string
    email: string
    hashedPassword: string
    confirmPassword: string
  }
  const handleRegistration = async (formData: RegistrationFormData) => {
    try {
      const response = await fetch(`${signUpUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setRegistrationSuccess(true)
        localStorage.setItem('justRegistered', 'true')
        localStorage.setItem('email', formData.email)
        setTimeout(() => {
          router.push('/email-confirmation')
        }, 2000)
      } else {
        setErrorMessage(errorMessages[response.status] || defaultErrorMessage)
      }
    } catch (error) {
      console.error('Registration error:', error)
      setErrorMessage(defaultErrorMessage)
    }
  }

  return (
    <div className="flex flex-col min-h-screen background">
      <div className="flex-1">
        <GeneralAuthForm
          inputs={[
            {
              type: 'text',
              name: 'name',
              placeholder: 'Name',
              required: true
            },
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
            },
            {
              type: 'password',
              name: 'confirmPassword',
              placeholder: 'Confirm Password',
              required: true
            }
          ]}
          onSubmit={handleRegistration}
          errorMessage={errorMessage}
          title="Welcome to Roshan Rooz"
          subTitle="Register to get started"
          primaryLinkText="Already have an account?"
          primaryLink="/login"
          primaryLinkTextSubheader="Log in here"
          buttonText="Register"
          successMessage={
            registrationSuccess
              ? 'Your registration request is being processed. Please wait...'
              : null
          }
        />
      </div>
    </div>
  )
}

export default Register
