import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgUxlcAfgU9Wscaw9O43owrDnIrmOomqw",
  authDomain: "backend-appm3r.firebaseapp.com",
  projectId: "backend-appm3r",
  storageBucket: "backend-appm3r.appspot.com",
  messagingSenderId: "646015583046",
  appId: "1:646015583046:web:eaf7282c5a2d712438db47"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)