import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXB8nECrCP16eOsIztCgtlfCAATprlQJs",
  authDomain: "clone-37425.firebaseapp.com",
  projectId: "clone-37425",
  storageBucket: "clone-37425.appspot.com",
  messagingSenderId: "903210715322",
  appId: "1:903210715322:web:0adcddd5b1312fcae0da83",
  measurementId: "G-LJJVVKDBW1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
