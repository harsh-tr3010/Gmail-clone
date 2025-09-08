import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbXocrSh25NWui23vnTSQjExkSHEBxc70",
  authDomain: "clone-dbb5c.firebaseapp.com",
  projectId: "clone-dbb5c",
  storageBucket: "clone-dbb5c.firebasestorage.app",
  messagingSenderId: "296593293560",
  appId: "1:296593293560:web:e91707e1ef98737b04bb0d",
  measurementId: "G-VD4YQ3E5D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();