import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui-elements/btn'

export interface LoginFormValues {
  email: string
  hashedPassword: string
}

export interface LoginFormProps {
  onLogin: (formData: LoginFormValues) => void
  errorMessage: string | null
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, errorMessage }) => {
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

  const labelStyle = 'block text-black text-sm font-bold mb-2'
  const inputStyle =
    'shadow appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:border-secondary'

  return (
    <div className="shadow-md px-8 py-10 m-auto mt-40 max-w-md h-[60vh] white opacity-80 rounded">
      {errorMessage && (
        <div
          className="mb-6 p-4 rounded-md shadow-lg rose-50 border-l-4 border-rose-400"
          role="alert"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-rose-400"
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
              <h3 className="text-sm leading-5 font-medium text-rose-800">
                Error!
              </h3>
              <div className="mt-2 text-sm leading-5 text-rose-600">
                <p>{errorMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6 border-b border-gray-300 pb-4">
        <div className="text-black text-sm">
          <h2>
            Every day is a new page
            <div> Log in to begin.</div>
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-6">
          <label className={labelStyle} htmlFor="password">
            Password
          </label>
          <input
            className={inputStyle}
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
          <Button variant="background" onClick={() => {}}>
            Login
          </Button>
        </div>
        <div className="border-t border-gray-300 pt-10">
          <h2 className="text-black text-sm">
            New to Roshan Rooz?
            <Link className="hover:underline ml-1 " href="/register">
              Sign up
            </Link>
          </h2>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
