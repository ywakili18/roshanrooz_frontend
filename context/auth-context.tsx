import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'
import Cookies from 'js-cookie'

interface User {
  name?: string
  email: string
  hashedPassword: string
}

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isAuthenticated: () => boolean
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = Cookies.get('authToken')
    if (token) {
      fetchCurrentUser(token)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchCurrentUser = async (token: string) => {
    try {
      const userUrl = process.env.NEXT_PUBLIC_BACKEND_URL_AUTH_CHECKUSER
      if (!userUrl) {
        console.error('Backend URL for checking user is not defined.')
        setLoading(false)
        return
      }

      const response = await fetch(userUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
      } else {
        console.error('Failed to fetch current user')
      }
    } catch (error) {
      console.error('Error fetching current user:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = () => {
    Cookies.remove('authToken') // Remove the token when logging out
    setUser(null)
  }

  const isAuthenticated = () => {
    return !!user
  }

  if (loading) return <div>Loading...</div>

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext
