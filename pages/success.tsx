import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export const Success: React.FC = ({}) => {
  const printCreds = () => {
    console.log(firebase.auth().currentUser.uid);
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <p>Successful Login</p>
      <button onClick={printCreds}>Print Creds</button>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Success;
