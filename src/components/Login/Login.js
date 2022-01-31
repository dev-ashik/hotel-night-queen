import React, { useContext } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userContext } from "../Routes/Routes";
import { useHistory, useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const userInfo = { name: displayName, email: email }
        setLoggedInUser(userInfo)
        // storeAuthToken();
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    // const auth = getAuth();
    firebaseApp.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      console.log(idToken);
    }).catch(function(error) {
      // Handle error
    });
  }

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Sing in</button>
    </div>
  );
};

export default Login;
