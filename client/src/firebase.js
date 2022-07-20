// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzcYpzTDLEUtyTSoQ8YgmNlgjVH7bdSmQ",
  authDomain: "project-a9a3c.firebaseapp.com",
  databaseURL: "https://project-a9a3c-default-rtdb.firebaseio.com",
  projectId: "project-a9a3c",
  storageBucket: "project-a9a3c.appspot.com",
  messagingSenderId: "777692993210",
  appId: "1:777692993210:web:7ea37cf97e045bf126d483",
  measurementId: "G-PJCY7BSSG3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)