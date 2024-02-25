// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAq0mzoNTucLd22PIdmZBxJWN8oE7cfFn8",
  authDomain: "curedplusplus-c593f.firebaseapp.com",
  projectId: "curedplusplus-c593f",
  storageBucket: "curedplusplus-c593f.appspot.com",
  messagingSenderId: "944639783568",
  appId: "1:944639783568:web:7e3ed39e01ba3cf2ad9e15",
  measurementId: "G-PYRDKE31HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const userRef = collection(firebaseDB, "users");