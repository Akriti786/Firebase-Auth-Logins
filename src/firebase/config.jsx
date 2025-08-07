import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa-Z8uAgzY_d7P6wF0QoCO64pZi3kUkH0",
  authDomain: "fir-74f2e.firebaseapp.com",
  projectId: "fir-74f2e",
  storageBucket: "fir-74f2e.appspot.com", // ✅ Fixed here
  messagingSenderId: "1054883193900",
  appId: "1:1054883193900:web:7ac8c52e596a6cf3dfdd89"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
