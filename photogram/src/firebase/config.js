import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFYGCnVFrbzZdKJsHhpiY36xkwIC47A9A",
  authDomain: "photogram-4a8bc.firebaseapp.com",
  projectId: "photogram-4a8bc",
  storageBucket: "photogram-4a8bc.appspot.com",
  messagingSenderId: "622922506241",
  appId: "1:622922506241:web:8fee2ec7ba012ba7e46000",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
