import  firebase from 'firebase/app';  

import 'firebase/auth'
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
// import  firebase  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjunCMi3qUyfl7bDR6WXsuxzYxp289u3s",
  authDomain: "photogallery-adb5b.firebaseapp.com",
  projectId: "photogallery-adb5b",
  storageBucket: "photogallery-adb5b.appspot.com",
  messagingSenderId: "991493389904",
  appId: "1:991493389904:web:fb80b6bf984b93f2cadb55"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
export { projectStorage, projectFirestore , timestamp};