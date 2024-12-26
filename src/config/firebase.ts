// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL_WeOmOWqhzSxpXH23EZXcJE5kd1HhMQ",
  authDomain: "shibnev-portfolio.firebaseapp.com",
  projectId: "shibnev-portfolio",
  storageBucket: "shibnev-portfolio.firebasestorage.app",
  messagingSenderId: "296167085043",
  appId: "1:296167085043:web:cdc1823bc9fee270b1f886",
  measurementId: "G-4JVEJWZH4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app
