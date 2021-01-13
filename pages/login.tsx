import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import CenterContainer from '../components/containers/centerContainer';
import firebase from 'firebase/app';
import 'firebase/auth';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/my-profile',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const Login: React.FC = () => {
  return (
    <div>
      <CenterContainer>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </CenterContainer>
    </div>
  );
};

export default Login;
