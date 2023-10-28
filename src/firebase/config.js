// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFJewSUEASOmW7usbLetg1N3p_huOQNkg",
  authDomain: "chat-d6291.firebaseapp.com",
  projectId: "chat-d6291",
  storageBucket: "chat-d6291.appspot.com",
  messagingSenderId: "587258279170",
  appId: "1:587258279170:web:65af00567e8127f29b3e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider
