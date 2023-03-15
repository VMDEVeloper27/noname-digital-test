// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcNxhDzyz_1JgEYIZCEe0-NlXZKgvd4CM",
  authDomain: "noname-digital-test-dd97f.firebaseapp.com",
  projectId: "noname-digital-test-dd97f",
  storageBucket: "noname-digital-test-dd97f.appspot.com",
  messagingSenderId: "137964793510",
  appId: "1:137964793510:web:0fd28f1357ae8dcc790e67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
