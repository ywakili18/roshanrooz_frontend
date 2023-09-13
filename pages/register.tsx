// pages/register.tsx
import { useRouter } from 'next/router'
import SignUpForm from './components/auth-forms/signup'
import { RegistrationFormData } from './components/auth-forms/signup'

const Register: React.FC = () => {
  const signUpUrl = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_SIGNUP
  const router = useRouter()

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
        // Redirect to the login page or show a success message
        router.push('/login')
      } else {
        // Handle registration error (e.g., duplicate email)
        console.error('Registration failed')
      }
    } catch (error) {
      // Handle network or server error
      console.error('Registration error:', error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-primary ">
      <div className="flex-1">
        <SignUpForm onRegister={handleRegistration} />
      </div>
    </div>
  )
}

export default Register
