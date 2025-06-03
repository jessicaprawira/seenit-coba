// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNVpbIJZsiuE3NfOqo1ZDcbwhfIah1SXs",
  authDomain: "seenit-coba-cd7c3.firebaseapp.com",
  projectId: "seenit-coba-cd7c3",
  storageBucket: "seenit-coba-cd7c3.firebasestorage.app",
  messagingSenderId: "473855914179",
  appId: "1:473855914179:web:027f06836765a45da37276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);