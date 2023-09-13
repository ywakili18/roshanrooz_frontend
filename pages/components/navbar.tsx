import Link from 'next/link'
import { useAuth } from '../../context/auth-context'

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  // Common classes for navigation items.
  const navCommonClasses =
    'relative text-secondary mr-4 cursor-pointer px-4 py-2 rounded-lg group'

  // Common classes for underline animation effect.
  const underlineEffect =
    'absolute left-0 w-0 h-[.4px] bg-secondary group-hover:w-full transition-width duration-300 ease-in-out bottom-0 transform-origin-left'

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 bg-primary border border-gray-200 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className={`${navCommonClasses}`}>
              Roshan Rooz
              <span className={`${underlineEffect}`}></span>
            </span>
          </Link>
        </div>
        <div>
          {isAuthenticated() ? (
            <button className={navCommonClasses} onClick={() => logout()}>
              Logout
              <span className={`${underlineEffect}`}></span>
            </button>
          ) : (
            <div className="flex">
              <Link href="/login">
                <span className={`${navCommonClasses}`}>
                  Login
                  <span className={`${underlineEffect}`}></span>
                </span>
              </Link>
              <Link href="/register">
                <span className={`${navCommonClasses}`}>
                  Register
                  <span className={`${underlineEffect}`}></span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
