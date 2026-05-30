
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "amul-c2846.firebaseapp.com",
  projectId: "amul-c2846",
  storageBucket: "amul-c2846.firebasestorage.app",
  messagingSenderId: "254261454201",
  appId: "1:254261454201:web:a3f81501e407e1de3c7ba8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
