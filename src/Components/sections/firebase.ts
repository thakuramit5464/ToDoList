import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAecfjTGXCWhaxinwB8Oi99Hl-zYKzDgoU",
  authDomain: "todolist-9f67c.firebaseapp.com",
  projectId: "todolist-9f67c",
  storageBucket: "todolist-9f67c.appspot.com",
  messagingSenderId: "908812013136",
  appId: "1:908812013136:web:c227a957f266e36d3d4b55",
  measurementId: "G-CBQM5N3VR9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
// export const db = firebase.database();
console.log(auth);
// console.log(db);
// const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
