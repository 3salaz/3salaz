import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, analytics, auth, firestore };
