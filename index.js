// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHPSqoB1SSgOKLo5Lh1oIOyrB9hCACX2I",
  authDomain: "salaz-b4309.firebaseapp.com",
  databaseURL: "https://salaz-b4309-default-rtdb.firebaseio.com",
  projectId: "salaz-b4309",
  storageBucket: "salaz-b4309.appspot.com",
  messagingSenderId: "775356987669",
  appId: "1:775356987669:web:ca605fc7e5a20fbf1f911c",
  measurementId: "G-RXJ83LGVQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);