import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD0rxwMvRgBF2vTePyaGFZ-tlhJyeC7jII",
    authDomain: "react-trabajo-final.firebaseapp.com",
    projectId: "react-trabajo-final",
    storageBucket: "react-trabajo-final.appspot.com",
    messagingSenderId: "180415450834",
    appId: "1:180415450834:web:355f6e0aeda95a8a31a70b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);