import { FunctionComponent } from 'react'
import Link from 'next/link'

type ErrorAlertProps = {
  message: string
  detail?: string
  linkHref?: string
  linkText?: string
  action?: JSX.Element | null
}

const ErrorAlert: FunctionComponent<ErrorAlertProps> = ({
  message,
  detail,
  linkHref,
  linkText,
  action
}) => {
  return (
    <div
      className="mb-6 p-4 rounded-md shadow-lg bg-background border-l-4"
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
            {message}
          </h3>
          <div className="mt-2 text-sm leading-5 text-rose-600">
            <p>
              {detail}
              {linkHref && linkText && (
                <Link
                  href={linkHref}
                  className="ml-1 font-semibold text-red-500 hover:text-red-600 hover:underline"
                >
                  {linkText}
                </Link>
              )}
              {action && action} {/* Render the action if provided */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorAlert
