// pages/register.tsx
import { useRouter } from 'next/router'
import { useState } from 'react'
import RegistrationForm from './components/auth-forms/register-form'
import { RegistrationFormData } from './components/auth-forms/register-form'

const Register: React.FC = () => {
  const signUpUrl = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_SIGNUP
  const router = useRouter()

  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [emailExists, setEmailExists] = useState(false)
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
        setTimeout(() => {
          router.push('/email-confirmation')
        }, 2000)
      } else if (response.status === 409) {
        setEmailExists(true)
      } else {
        console.error('Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen background ">
      <div className="flex-1">
        <RegistrationForm
          onRegister={handleRegistration}
          emailExists={emailExists}
        />
        {registrationSuccess && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <div className="text-gray-600 font-medium">
                Registration successful! Redirecting to login...
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Register
