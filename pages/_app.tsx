import { Provider } from 'react-redux';
import store from '../store.js';
import Layout from '../App';
import firebaseConfig from '../lib/firebaseConfig';
import firebase from 'firebase/app';
import '../styles/global.scss';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
