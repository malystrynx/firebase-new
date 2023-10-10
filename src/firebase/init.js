// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7e9ix1THd60cs6qauy82RCgjSOHhZ7aE",
  authDomain: "fir-practise-8f486.firebaseapp.com",
  projectId: "fir-practise-8f486",
  storageBucket: "fir-practise-8f486.appspot.com",
  messagingSenderId: "73416706544",
  appId: "1:73416706544:web:81b15df2d0b308d03df535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);