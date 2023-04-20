import { Store } from '@/config/redux/store/store';
import { Provider } from 'react-redux';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}
