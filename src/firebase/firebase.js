import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyBUmYffLYb9m6RqebRvIZWpubi6nwGenpA",
    authDomain: "thumbsupapp-e79f1.firebaseapp.com",
    projectId: "thumbsupapp-e79f1",
    storageBucket: "thumbsupapp-e79f1.appspot.com",
    messagingSenderId: "40635053387",
    appId: "1:40635053387:web:0b04923323c716a9e164ce",
    measurementId: "G-LMRKJGMZ2S"
  };
  
  initializeApp(firebaseConfig)

  export const db = getFirestore()
  
  export const auth = getAuth()