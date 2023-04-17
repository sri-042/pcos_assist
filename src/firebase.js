import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAte2APUyc1K8aTAU7Lnji2OYAUYDD49w",
  authDomain: "pcos-assist.firebaseapp.com",
  projectId: "pcos-assist",
  storageBucket: "pcos-assist.appspot.com",
  messagingSenderId: "200794028846",
  appId: "1:200794028846:web:1754b0ed89c10d703518bf",
  measurementId: "G-8NP8CLDGK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
