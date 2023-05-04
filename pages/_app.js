import Store, { persiststore } from '@/config/redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persiststore}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover={false}
          theme="colored"
          pauseOnFocusLoss={false}
        />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
