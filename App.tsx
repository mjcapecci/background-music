import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthStatus } from './actions/authActions';
import firebase from 'firebase/app';
import 'firebase/auth';

import Navbar from './components/menus/navbar';

//  This is the app's top level container.
//  Due to the nature of firebase auth, this is where auth status will be controlled.

const App: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken();
      dispatch(setAuthStatus({ details: user, token }));
    } else {
      dispatch(setAuthStatus(null));
    }
  });

  return (
    <div className='app'>
      <Navbar />
      {children}
    </div>
  );
};

export default App;
