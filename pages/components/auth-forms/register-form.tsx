// components/RegistrationForm.tsx
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui-elements/btn'
import ErrorAlert from '../ui-elements/error-alert'
export interface RegistrationFormData {
  name: string
  email: string
  hashedPassword: string
  confirmPassword: string
}

export interface RegistrationFormProps {
  onRegister: (formData: RegistrationFormData) => void
  errorMessage: string | null
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onRegister,
  errorMessage
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    hashedPassword: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.hashedPassword === formData.confirmPassword) {
      onRegister(formData)
    } else {
      alert('Passwords do not match')
    }
  }
  const labelStyle = 'block text-background text-sm font-bold mb-2'
  const inputStyle =
    'shadow appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:border-secondary'

  return (
    <div className="shadow-md px-8 py-10 m-auto mt-32 max-w-md min-h-[90vh] rounded bg-header">
      {errorMessage && <ErrorAlert message="Error!" detail={errorMessage} />}

      <div className="mb-6 border-b border-gray-300 pb-4">
        <div className="text-sm">
          <h2 className="text-white">
            Join our community
            <div className="text-secondary">Register to get started</div>
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="name">
            Name
          </label>
          <input
            className={inputStyle}
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            className={inputStyle}
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="hashedPassword">
            Password
          </label>
          <input
            className={inputStyle}
            id="hashedPassword"
            type="password"
            placeholder="Password"
            name="hashedPassword"
            value={formData.hashedPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className={labelStyle} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={inputStyle}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Register Button */}
        <div className="flex items-center justify-between mb-10">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </div>
        <div className="border-t border-gray-300 pt-10">
          <h2 className="text-sm text-background">
            Already have an account?
            <Link className="hover:underline ml-1 text-primary" href="/login">
              Log in here
            </Link>
          </h2>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
