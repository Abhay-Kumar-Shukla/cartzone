// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX4gm3dF12jhQFzCR6ASlXd4dV5C_WRUQ",
  authDomain: "cartzone-24014.firebaseapp.com",
  projectId: "cartzone-24014",
  storageBucket: "cartzone-24014.appspot.com",
  messagingSenderId: "732414156055",
  appId: "1:732414156055:web:94ac8feb9df432af976b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);