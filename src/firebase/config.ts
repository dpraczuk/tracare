// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfekb1p3FReJaf1AjCvmhZt9NifpqCh9I",
  authDomain: "tracare-site.firebaseapp.com",
  projectId: "tracare-site",
  storageBucket: "tracare-site.appspot.com",
  messagingSenderId: "322856856223",
  appId: "1:322856856223:web:1704ce52689548d45310aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);