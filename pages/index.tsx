import React from 'react';
import '../app/globals.css';
import LandingPage from './components/landing-page';
import RootLayout from '../app/layout';


const IndexPage: React.FC = () => {
  return (
    <>
      <RootLayout>
        <LandingPage />
      </RootLayout>
    </>
  );
};

export default IndexPage;
