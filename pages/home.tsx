
import { GetServerSideProps } from 'next';
const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Your protected content goes here */}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const isAuthenticated = () => {
    const token = req.cookies.authToken; 
    return !!token;
  };

  if (!isAuthenticated()) {
    res.setHeader('location', '/login');
    res.statusCode = 302;
    res.end();
  }

  return {
    props: {},
  };
};
