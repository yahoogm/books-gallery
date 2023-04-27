import { Store } from '@/config/redux/store/store';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover={false} theme="colored" pauseOnFocusLoss={false} />
      <Component {...pageProps} />
    </Provider>
  );
}
