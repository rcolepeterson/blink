import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
};

try {
  var fire = firebase.initializeApp(firebaseConfig).firestore();
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error raised", err.stack);
  }
}

export const auth = firebase.auth();

export default fire;
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
export const increment = firebase.firestore.FieldValue;
export const doSignInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const user = () => {
  return auth.currentUser;
};

export const doSignOut = () => auth.signOut();
