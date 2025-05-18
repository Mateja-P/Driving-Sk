import GoToTop from './GoToTop';
import Header from './Header';
import QuickActions from './QuickActions';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [footerLoc, setFooterLoc] = useState();

  const giveLoc = (val) => {
    setFooterLoc(val);
  };

  return (
    <div>
      <Header />
      <GoToTop endLoc={footerLoc} />
      <QuickActions />
      {children}
      <Footer getLoc={giveLoc} />
    </div>
  );
};

export default Layout;
