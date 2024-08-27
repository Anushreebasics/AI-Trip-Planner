// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9bDsX7w-KQWvFPL9SmfIzBVoO8ClcfM8",
  authDomain: "ai-trip-planner-2117f.firebaseapp.com",
  projectId: "ai-trip-planner-2117f",
  storageBucket: "ai-trip-planner-2117f.appspot.com",
  messagingSenderId: "207719823396",
  appId: "1:207719823396:web:ad1089c2bed3d4ef3d00b1",
  measurementId: "G-B916TRMKE2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);