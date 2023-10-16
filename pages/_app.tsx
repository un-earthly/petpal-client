import {store} from '@/redux/store';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
