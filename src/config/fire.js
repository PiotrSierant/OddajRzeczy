import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAueCfqeZNWBIlYV4DfCO9MPhyKztC4jTk",
  authDomain: "oddajrzeczy-1bac9.firebaseapp.com",
  projectId: "oddajrzeczy-1bac9",
  storageBucket: "oddajrzeczy-1bac9.appspot.com",
  messagingSenderId: "454970783817",
  appId: "1:454970783817:web:4620301c49b9431ca1e798",
  measurementId: "G-S0L26774RS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
