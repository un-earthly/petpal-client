import { AppProps } from 'next/app';
import { FC } from 'react';
import "../styles/globals.css"
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"
import AuthProvider from '@/src/context/authContext';
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
