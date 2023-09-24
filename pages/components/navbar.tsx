import Link from 'next/link'
import { useAuth } from '../../context/auth-context'
import Image from 'next/image'
const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  const primaryNavLink =
    'bg-textAccent text-background hover:bg-navLink rounded py-2 px-6 border-2 border-textAccent transition-colors duration-200'

  const secondaryNavLink =
    'bg-background text-background hover:bg-primary rounded hover:text-background py-2 px-6 border-2 border-primary text-primary transition-colors duration-200'

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-2 shadow rounded bg-[#f7f1d5]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/sunshine_logo.svg"
              width={80}
              height={50}
              alt="rooshan rooz logo"
            />
          </Link>
        </div>
        <div>
          {isAuthenticated() ? (
            <button className={primaryNavLink} onClick={() => logout()}>
              Logout
            </button>
          ) : (
            <div className="flex gap-5">
              <Link href="/login">
                <span className={`${secondaryNavLink}`}>Login</span>
              </Link>
              <Link href="/register">
                <span className={`${primaryNavLink}`}>Sign up </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
