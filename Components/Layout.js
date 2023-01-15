import GoToTop from './GoToTop';
import Header from './Header';
import QuickActions from './QuickActions';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [footerLoc, setFooterLoc] = useState();
  const [position, setPosition] = useState(44.7837198, 20.4172);

  const giveLoc = (val) => {
    setFooterLoc(val);
  };

  useEffect(() => {
    const successCallback = (position) => {
      setPosition(position.coords.accuracy);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <div>
      <Header usersPosition={position} />
      <GoToTop endLoc={footerLoc} />
      <QuickActions position={position} />
      {children}
      <Footer getLoc={giveLoc} usersPosition={position} />
    </div>
  );
};

export default Layout;
