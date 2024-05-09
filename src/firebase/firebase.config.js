// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3jigavoegVdzFR5TalDJdCJ06FygCCRw",
  authDomain: "jwt-b9a11.firebaseapp.com",
  projectId: "jwt-b9a11",
  storageBucket: "jwt-b9a11.appspot.com",
  messagingSenderId: "820624713725",
  appId: "1:820624713725:web:1138f663c4378726995b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;