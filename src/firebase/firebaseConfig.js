import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApYlp_lGD4OW6B5Pp7YbxIlaCDQZv7ZnM",
  authDomain: "ecommerce-a77af.firebaseapp.com",
  projectId: "ecommerce-a77af",
  storageBucket: "ecommerce-a77af.appspot.com",
  messagingSenderId: "186320757794",
  appId: "1:186320757794:web:5f31e1748a98c373a8567b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;