// components/LoginForm.tsx
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui-elements/btn'
export interface LoginFormValues {
  email: string
  hashedPassword: string
}

export interface LoginFormProps {
  onLogin: (formData: LoginFormValues) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState<LoginFormValues>({
    email: '',
    hashedPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(formData)
  }

  return (
    <div className="shadow-md px-8 py-10 mb-4 max-w-md mx-auto mt-20 h-[500px]">
      {' '}
      {/* Adjusted height and padding for a longer rectangular shape */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div className="text-gray-700 text-sm">
          <h2>
            {' '}
            Every day is a new page
            <div> Log in to begin.</div>
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="password"
            type="password"
            placeholder="Password"
            name="hashedPassword"
            value={formData.hashedPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-10">
          {/* Onclick expects "onclick" prop - form handles the onSubmit */}
          <Button variant="primary" onClick={() => {}}>
            Login
          </Button>
        </div>
        <div className="border-t border-gray-300 pt-10">
          <h2 className="text-gray-700 text-sm">
            New to Roshan Rooz?
            <Link
              className="text-blue-500 hover:underline ml-1"
              href="/register"
            >
              Sign up
            </Link>
          </h2>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
