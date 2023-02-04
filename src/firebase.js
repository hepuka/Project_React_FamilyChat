import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWpYj-vsEQrIZwgT1WnSveYjSnxU6IMts",
  authDomain: "familychat-f4b84.firebaseapp.com",
  projectId: "familychat-f4b84",
  storageBucket: "familychat-f4b84.appspot.com",
  messagingSenderId: "385331732078",
  appId: "1:385331732078:web:bcd5692cbea189052ad07f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
