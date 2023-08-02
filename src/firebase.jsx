// Import the necessary Firebase modules using the "compat" version
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Firebase configuration object with the necessary credentials
const firebaseConfig = {
  apiKey: "AIzaSyCXB8nECrCP16eOsIztCgtlfCAATprlQJs",
  authDomain: "clone-37425.firebaseapp.com",
  projectId: "clone-37425",
  storageBucket: "clone-37425.appspot.com",
  messagingSenderId: "903210715322",
  appId: "1:903210715322:web:0adcddd5b1312fcae0da83",
  measurementId: "G-LJJVVKDBW1",
};

// Initialize the Firebase app with the provided configuration
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Create an instance of Firestore to interact with the database
const db = firebaseApp.firestore();

// Create an instance of Firebase Auth to handle user authentication
const auth = firebase.auth();

// Export the Firestore and Auth instances to use in other parts of the application
export { db, auth };
