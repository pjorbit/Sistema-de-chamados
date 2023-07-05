import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkyxDdLMHWuchx6pbmMUFRSylL3mTcjIs",
  authDomain: "tickets-d06d6.firebaseapp.com",
  projectId: "tickets-d06d6",
  storageBucket: "tickets-d06d6.appspot.com",
  messagingSenderId: "758648958839",
  appId: "1:758648958839:web:dea22b77c40916c329bb72",
  measurementId: "G-S7330DGBJS",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };