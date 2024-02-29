import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRlUFSgq_kVaiQID1S3prar2sKFvVzxJc",
  authDomain: "auth-development-ac1b9.firebaseapp.com",
  projectId: "auth-development-ac1b9",
  storageBucket: "auth-development-ac1b9.appspot.com",
  messagingSenderId: "949177334309",
  appId: "1:949177334309:web:d47b4f490bf7821c911dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };