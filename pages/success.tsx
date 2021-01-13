import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';

export const Success: React.FC = ({}) => {
  const printCreds = async () => {
    const token = await firebase.auth()?.currentUser?.getIdToken();

    try {
      await axios.post('http://localhost:3000/api/test', { token });
    } catch (error) {
      console.log(error);
    }
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
