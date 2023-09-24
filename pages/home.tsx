import { GetServerSideProps } from 'next'
import { useAuth } from '../context/auth-context'
import { Button } from './components/ui-elements/btn'
const Home: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()
  return (
    <div>
      <h1 className="text-black mt-40">Welcome to the Home Page</h1>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const isAuthenticated = () => {
    const token = req.cookies.authToken
    return !!token
  }

  if (!isAuthenticated()) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
  }

  return {
    props: {}
  }
}
