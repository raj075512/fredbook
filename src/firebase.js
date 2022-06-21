// import firebase from "firebase";
import "firebase/compat/auth";
// import 'firebase/compat/app'
import "firebase/compat/firestore";
// import 'firebase/firestore';
import firebase from "firebase/compat/app";
// // import "firebase/compat/auth"
// // import "firebase/compat/firestore"
// 
// // import { initializeApp } from 'firebase/app';
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDPLMSUXKvZW-pabLCeikHR2zM5rxBy5b0",
  authDomain: "frndbook-85164.firebaseapp.com",
  projectId: "frndbook-85164",
  storageBucket: "frndbook-85164.appspot.com",
  messagingSenderId: "687288498667",
  appId: "1:687288498667:web:65bb468a3f81e1dd37c1ae",
  measurementId: "G-330T51E1TE",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const provider =new  firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider();
export {auth , provider} ;
const db = firebase.firestore();
// export default firebase;
export default db;
