// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3kSWW-rHxy4xERsPVeF_26-bsP13sFtk",
  authDomain: "app-store-1-6cbdf.firebaseapp.com",
  projectId: "app-store-1-6cbdf",
  storageBucket: "app-store-1-6cbdf.appspot.com",
  messagingSenderId: "512613266670",
  appId: "1:512613266670:web:8710aa5ea47fe787c0afff",
  measurementId: "G-1SBKXD7T1X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);