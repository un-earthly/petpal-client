import { AppProps } from 'next/app';
import { FC } from 'react';
import "../styles/globals.css"
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
