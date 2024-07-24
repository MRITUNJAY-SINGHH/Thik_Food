import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBmEwivhYD9SKxSiO43JhihBfTkQzeVZpE",
  authDomain: "thiktivefood-app.firebaseapp.com",
  projectId: "thiktivefood-app",
  storageBucket: "thiktivefood-app.appspot.com",
  messagingSenderId: "142073592177",
  appId: "1:142073592177:web:b838134c2d2f95ff9c5ed0",
  measurementId: "G-TYCT6411SY"
};


initializeApp(firebaseConfig);
export const auth = getAuth();