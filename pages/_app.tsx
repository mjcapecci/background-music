import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store.js';
import firebaseConfig from '../lib/firebaseConfig';
import firebase from 'firebase/app';
import '../styles/global.scss';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App({ Component, pageProps }) {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
