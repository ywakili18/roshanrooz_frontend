import Link from 'next/link'
import { useAuth } from '../../context/auth-context'

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 bg-[#FCF9DA] border border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-[#DB636F] cursor-pointer hover:underline transition duration-300 ease-in-out">
              Roshan Rooz
            </span>
          </Link>
        </div>
        <div>
          {isAuthenticated() ? (
            <button
              className="bg-white text-[#DB636F] px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300 ease-in-out"
              onClick={() => logout()}
            >
              Logout
            </button>
          ) : (
            <div className="flex">
              <Link href="/login">
                <span className="text-[#DB636F] mr-4 cursor-pointer hover:underline transition duration-300 ease-in-out">
                  Login
                </span>
              </Link>
              <Link href="/register">
                <span className="text-[#DB636F] cursor-pointer hover:underline transition duration-300 ease-in-out">
                  Register
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
