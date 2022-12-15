// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0RsfFmz-zA5NhwvjwjUzHc-XRN-Q3-Tg",
  authDomain: "ecomm-react-77e00.firebaseapp.com",
  projectId: "ecomm-react-77e00",
  storageBucket: "ecomm-react-77e00.appspot.com",
  messagingSenderId: "111391949457",
  appId: "1:111391949457:web:9a3461666db3aadd10f530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;