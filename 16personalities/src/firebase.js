// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt0Hfrsx9o-wD43ttBj5_xKbbm9ztNsow",
  authDomain: "personalities016.firebaseapp.com",
  projectId: "personalities016",
  storageBucket: "personalities016.appspot.com",
  messagingSenderId: "54546900565",
  appId: "1:54546900565:web:ddb49c0747125bc26756dc",
  measurementId: "G-47G950ZDQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log('Firebase auth initialized:', auth);

export { auth };
