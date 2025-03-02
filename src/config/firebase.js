import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBiavZS6dk9rYEWv_PHLnn6Rj-eg5l6d0c",
  authDomain: "newsam-4f711.firebaseapp.com",
  projectId: "newsam-4f711",
  storageBucket: "newsam-4f711.firebasestorage.app",
  messagingSenderId: "970564497634",
  appId: "1:970564497634:web:fae4bea3f2a35e041a2ebb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
