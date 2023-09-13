// components/RegistrationForm.tsx
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui-elements/btn'
export interface RegistrationFormData {
  name: string
  email: string
  hashedPassword: string
  confirmPassword: string
}

export interface RegistrationFormProps {
  onRegister: (formData: RegistrationFormData) => void
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
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

    // Check if passwords match before sending the request
    if (formData.hashedPassword === formData.confirmPassword) {
      onRegister(formData)
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <div className="shadow-md px-8 py-10 mb-4 max-w-md mx-auto mt-10 h-[550px]">
      <div className="mb-6  border-b border-gray-300 pb-">
        <h2 className="text-gray-700 text-sm mb-5">
          Have an account?
          <Link href="/login" className="text-blue-500 hover:underline ml-1">
            Log in
          </Link>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="hashedPassword"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
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
        <div className="flex items-center justify-between mt-8">
          <Button variant="primary" onClick={() => {}}>
            Register
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
