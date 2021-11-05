import  firebase from 'firebase/app';  

import 'firebase/auth'
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
// import  firebase  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAiVeBDP8GBT9H76bVEjCo49bjEeT8ipT0",
  authDomain: "disney-43ad3.firebaseapp.com",
  projectId: "disney-43ad3",
  databaseURL: "https://disney-43ad3-default-rtdb.firebaseio.com/",
  storageBucket: "disney-43ad3.appspot.com",
  messagingSenderId: "602419254554",
  appId: "1:602419254554:web:f6b0b8d28c98d4649c48a3"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
export { projectStorage, projectFirestore , timestamp};

