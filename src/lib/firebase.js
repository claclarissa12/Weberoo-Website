// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-SwSCG2lor94tKgS771_LPv6wVMhgZ04",
  authDomain: "weberoo-landing.firebaseapp.com",
  projectId: "weberoo-landing",
  storageBucket: "weberoo-landing.firebasestorage.app",
  messagingSenderId: "592434942219",
  appId: "1:592434942219:web:67d920e1c3bfc1f210920e",
  measurementId: "G-1BWJ2ZLTFR"
};

// Hindari inisialisasi ganda
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
