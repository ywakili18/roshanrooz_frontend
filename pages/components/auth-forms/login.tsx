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

  const labelStyle = 'block text-black text-sm font-bold mb-2'
  const inputStyle =
    'shadow appearance-none border w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:border-secondary'

  return (
    <div className="shadow-md px-8 py-10 m-auto mt-40 max-w-md h-[60vh] bg-white bg-opacity-80 rounded">
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
          <Button variant="primary" onClick={() => {}}>
            Login
          </Button>
        </div>
        <div className="border-t border-gray-300 pt-10">
          <h2 className="text-black text-sm">
            New to Roshan Rooz?
            <Link
              className="hover:underline ml-1 text-secondary"
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
