import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMsz2W4Q9cgwGmKmGTKNbPhv-K_AS9L04",
  authDomain: "crown-clothing-db-6e272.firebaseapp.com",
  projectId: "crown-clothing-db-6e272",
  storageBucket: "crown-clothing-db-6e272.appspot.com",
  messagingSenderId: "57453419333",
  appId: "1:57453419333:web:5d592b07aec125f3f8bc2c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const proivder = new GoogleAuthProvider();
proivder.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, proivder);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // check if userdata
  // create / set the doc with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error(error);
    }
  }

  // if exist ? userDocRef
  return userDocRef;
};
