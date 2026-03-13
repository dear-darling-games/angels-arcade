import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzBesNrHzCieMcIHX8kUGDqf3It2yf7x4",
  authDomain: "angel-s-arcade-b04d5.firebaseapp.com",
  databaseURL: "https://angel-s-arcade-b04d5-default-rtdb.firebaseio.com",
  projectId: "angel-s-arcade-b04d5",
  storageBucket: "angel-s-arcade-b04d5.firebasestorage.app",
  messagingSenderId: "790116728687",
  appId: "1:790116728687:web:88fdb86f45ca6d8816329a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
