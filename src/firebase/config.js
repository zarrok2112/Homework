// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5rrs5ZHZ-zzPZnL-vizwEooGue48B-ik",
  authDomain: "estructura-homework.firebaseapp.com",
  projectId: "estructura-homework",
  storageBucket: "estructura-homework.appspot.com",
  messagingSenderId: "317404351586",
  appId: "1:317404351586:web:57e80b06630dda0752953b",
  measurementId: "G-35Z2L0PVTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()

export {app, analytics, auth}