import { useState, ReactNode } from 'react'
import { Button } from '../ui-elements/btn'
import ErrorAlert from '../ui-elements/error-alert'
import Link from 'next/link'
interface FormInput {
  type: string
  name: string
  placeholder: string
  required?: boolean
}

export interface GeneralAuthFormProps {
  inputs: FormInput[]
  onSubmit: (formData: any) => void
  errorMessage: string | null
  // onAction?: () => void
  // actionMessage?: JSX.Element
  title: string
  subTitle: string

  primaryLink: string
  primaryLinkText: string
  primaryLinkTextSubheader: string
  secondaryLink?: string
  secondaryLinkText?: string
  secondaryLinkTextSubheader?: string
  buttonText: string
  onResendConfirmation?: () => Promise<void>
  successMessage: string | null
  isRegistrationForm?: boolean
}

const GeneralAuthForm: React.FC<GeneralAuthFormProps> = ({
  inputs,
  onSubmit,
  errorMessage,
  // onAction,
  // actionMessage,
  title,
  subTitle,
  primaryLink,
  primaryLinkText,
  primaryLinkTextSubheader,
  secondaryLink,
  secondaryLinkText,
  secondaryLinkTextSubheader,
  buttonText,
  onResendConfirmation,
  successMessage,
  isRegistrationForm = false
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      isRegistrationForm &&
      formData.hashedPassword !== formData.confirmPassword
    ) {
      alert('Passwords do not match')
      return
    }

    onSubmit(formData)
  }

  const labelStyle = 'block text-background text-sm font-bold mb-2'
  const inputStyle =
    'shadow appearance-none border w-full py-2 px-3 leading-tight focus:outline-none focus:border-secondary'

  return (
    <div className="shadow-md px-8 py-10 m-auto mt-32 max-w-md min-h-[80vh] rounded bg-header">
      {errorMessage && (
        <ErrorAlert
          message="Error!"
          detail={errorMessage}
          action={
            errorMessage ===
              'Your account is not confirmed yet. Please check your email and confirm your account.' &&
            onResendConfirmation ? (
              <button
                className="ml-1 font-semibold text-red-500 hover:text-red-600 hover:underline"
                onClick={onResendConfirmation}
              >
                Resend Confirmation
              </button>
            ) : null
          }
        />
      )}
      {successMessage && (
        <div className="mb-4 text-red-500 bg-background p-4 rounded-lg shadow-md flex items-center space-x-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>{successMessage}</span>
        </div>
      )}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-white">
          {title}
          <div className="text-secondary">{subTitle}</div>
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        {inputs.map((input, idx) => (
          <div className="mb-4" key={idx}>
            <label className={labelStyle} htmlFor={input.name}>
              {input.placeholder}
            </label>
            <input
              className={inputStyle}
              id={input.name}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={formData[input.name] || ''}
              onChange={handleChange}
              required={input.required}
            />
          </div>
        ))}
        <div className="flex items-center justify-between mb-10 mt-10">
          <Button variant="primary" type="submit">
            {buttonText}
          </Button>
        </div>
        {/* first link in form */}
        <div className="border-t border-gray-300 pt-10">
          <span className="text-background">{primaryLinkText}</span>
          <Link href={primaryLink}>
            {' '}
            <span className=" hover:underline ml-1 text-primary">
              {primaryLinkTextSubheader}
            </span>
          </Link>
        </div>{' '}
        {/*  second link in form - if necessary: such as forgot password, etc. */}
        <div>
          {secondaryLink && (
            <>
              <span className="text-background">{secondaryLinkText}</span>
              <Link href={secondaryLink}>
                <span className=" hover:underline ml-1 text-primary">
                  {secondaryLinkTextSubheader}
                </span>
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default GeneralAuthForm
