import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAwXZETAFCVf_MS2wvIChdC34u6VSUU1bc",
    authDomain: "project-605b3.firebaseapp.com",
    projectId: "project-605b3",
    storageBucket: "project-605b3.appspot.com",
    messagingSenderId: "956868715586",
    appId: "1:956868715586:web:7bc9a5f2589120dae579db",
    measurementId: "G-9WMYRZRPS3"
  };
  
  // Initialize Firebase
  export const firebase_app = initializeApp(firebaseConfig);
  export const firebase_auth = getAuth(firebase_app);