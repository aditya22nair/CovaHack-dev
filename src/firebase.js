import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAGQeQ2XJpnN3H9SU8Wk2MVNQNHAdDfBRc",
  authDomain: "covahack.firebaseapp.com",
  projectId: "covahack",
  storageBucket: "covahack.appspot.com",
  messagingSenderId: "28401822968",
  appId: "1:28401822968:web:2ad351d605f0f1b11f9f0d",
  measurementId: "G-WDYEK2Q9HE",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
// export const [user] = useAuthState(auth);

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign In With Google</button>;
};

export const SignOut = () => {
  return (
    auth.currentUser && (
      <button
        onClick={() => {
          auth.signOut();
        }}>
        Sign Out
      </button>
    )
  );
};
