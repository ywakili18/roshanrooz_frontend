// components/Navbar.tsx
import Link from 'next/link';
import { useAuth } from '../../context/auth-context';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            Roshan Rooz
          </Link>
        </div>
        <div>
          {isAuthenticated() ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => logout()}
            >
              Logout
            </button>
          ) : (
            <div>
              <Link href="/login">
                <div className="text-white mr-4">Login</div>
              </Link>
              <Link href="/register">
                <div className="text-white">Register</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
