// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWCFpqJ6RMidik4pgAsSZU4kdu6epcqRs",
  authDomain: "ecommerce-web3.firebaseapp.com",
  projectId: "ecommerce-web3",
  storageBucket: "ecommerce-web3.appspot.com",
  messagingSenderId: "42268226706",
  appId: "1:42268226706:web:85071e48d65a011dfb624b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;
