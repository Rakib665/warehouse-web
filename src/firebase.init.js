// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeZpeS56_6TyosgVC24reoOhaYNy4CCLs",
  authDomain: "my-warehouse-e5cac.firebaseapp.com",
  projectId: "my-warehouse-e5cac",
  storageBucket: "my-warehouse-e5cac.appspot.com",
  messagingSenderId: "224056745590",
  appId: "1:224056745590:web:a5dbc7ceac85d09c210957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth