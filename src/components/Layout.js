import React from 'react';
import Header from './header';
import Footer from './footer';
import MainBox from './MainBox';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="header-spacer"></div>
      <Header />
      <MainBox />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
