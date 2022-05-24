// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6I8w3ACskFSCSAdX_uPkTcWx7-eQSFws",
  authDomain: "loyal-parts-f740c.firebaseapp.com",
  projectId: "loyal-parts-f740c",
  storageBucket: "loyal-parts-f740c.appspot.com",
  messagingSenderId: "747892230387",
  appId: "1:747892230387:web:a47b84c0f026cfc9860f86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;