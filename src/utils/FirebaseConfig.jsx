import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0RsfFmz-zA5NhwvjwjUzHc-XRN-Q3-Tg",
  authDomain: "ecomm-react-77e00.firebaseapp.com",
  projectId: "ecomm-react-77e00",
  storageBucket: "ecomm-react-77e00.appspot.com",
  messagingSenderId: "111391949457",
  appId: "1:111391949457:web:9a3461666db3aadd10f530"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;