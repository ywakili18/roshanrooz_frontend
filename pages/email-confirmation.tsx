import AccessDenied from './components/access-denied'
import { useEffect, useState } from 'react'
import { Button } from './components/ui-elements/btn'
import Link from 'next/link'
import ErrorAlert from './components/ui-elements/error-alert'
const EmailConfirmation: React.FC = () => {
  const [isJustRegistered, setIsJustRegistered] = useState<boolean>(
    !!localStorage.getItem('justRegistered')
  )
  const [acknowledged, setAcknowledged] = useState<boolean>(false)
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(
    null
  )

  useEffect(() => {
    if (acknowledged) {
      localStorage.removeItem('justRegistered')
      setIsJustRegistered(false)
    }
  }, [acknowledged])

  if (!isJustRegistered && !acknowledged) {
    return <AccessDenied />
  }

  const handleResend = async () => {
    try {
      const email = localStorage.getItem('email')
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_RESEND_CONFIRMATION}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        }
      )
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Could not resend confirmation email.')
      }

      setAcknowledged(true)
      setConfirmationMessage(
        'Confirmation email resent. Please check your inbox.'
      )
    } catch (error) {
      setConfirmationMessage('An error occurred.')
    }
  }

  return (
    <div className="flex flex-col min-h-screen background">
      <div className="m-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Almost there!</h1>
        <p>
          Please check your email for a confirmation link to activate your
          account.
        </p>
        {confirmationMessage && <p className="mt-4">{confirmationMessage}</p>}
        <div className="flex items-center gap-5 justify-center mt-20">
          <Button onClick={handleResend} variant="secondary">
            Resend Confirmation Email
          </Button>
          <Link href="/login">
            <Button variant="primary" onClick={() => {}}>
              Return to login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmailConfirmation
