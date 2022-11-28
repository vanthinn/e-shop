import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWpS4VONaI_wDNRG9Vd_NmhpSnZaLN-V8",
  authDomain: "e-shop-33a64.firebaseapp.com",
  projectId: "e-shop-33a64",
  storageBucket: "e-shop-33a64.appspot.com",
  messagingSenderId: "132581544916",
  appId: "1:132581544916:web:0eb632b18992a2e7dbfc41",
  measurementId: "G-YS69S8CLKB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
