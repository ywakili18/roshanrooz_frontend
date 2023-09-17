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
  emailExists: boolean
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onRegister,
  emailExists
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

  const labelStyle = 'block text-black text-sm font-bold mb-2'
  const inputStyle =
    'shadow appearance-none border w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-secondary'

  return (
    <div className="shadow-md px-8 py-10 m-auto mt-40 max-w-md h-[75vh] white opacity-80 rounded ">
      {emailExists && (
        <div
          className="mb-6 p-4 rounded-md shadow-lg red-50 border-l-4 border-red-400"
          role="alert"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm leading-5 font-medium text-red-800">
                Oops!
              </h3>
              <div className="mt-2 text-sm leading-5 text-red-700">
                <p>
                  This email already exists.
                  <Link
                    href="/login"
                    className="ml-1 font-semibold text-red-500 hover:text-red-600 hover:underline"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6 border-b border-gray-300 pb-4">
        <div className="text-black text-sm">
          <h2>
            Join our community.
            <div> Register to get started.</div>
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
          <button type="submit">
            <Button variant="background" onClick={() => {}}>
              Register
            </Button>
          </button>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-black text-sm">
            Already have an account?
            <Link className="hover:underline ml-1 " href="/login">
              Log in
            </Link>
          </h2>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
