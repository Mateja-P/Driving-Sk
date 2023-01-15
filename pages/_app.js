import '../styles/globals.scss';
import Layout from '../Components/Layout';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [position, setPosition] = useState(0);

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
    <Layout>
      <Component {...pageProps} position={position} />
    </Layout>
  );
}
