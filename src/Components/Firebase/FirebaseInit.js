import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQOJGmR46RY9lFwuXTJimSaa5MJTtZ4g0",
  authDomain: "hope-7054e.firebaseapp.com",
  projectId: "hope-7054e",
  storageBucket: "hope-7054e.appspot.com",
  messagingSenderId: "1030033439884",
  appId: "1:1030033439884:web:fbc6e79bf721ab1a2f4fa9",
  measurementId: "G-DYV3Z5DKZM",
};

const FirebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInit;
