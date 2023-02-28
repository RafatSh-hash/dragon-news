// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFlORNuM_huUx1S-Hr4HlYgzVln5hvfz8",
  authDomain: "news2-auth.firebaseapp.com",
  projectId: "news2-auth",
  storageBucket: "news2-auth.appspot.com",
  messagingSenderId: "652324735522",
  appId: "1:652324735522:web:e7619ac0c1aa15c13d187b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
