import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyB7nh50msd-jPOiLiAQm4XvyRZsXuV5d-o",
    authDomain: "chat-app-e727d.firebaseapp.com",
    projectId: "chat-app-e727d",
    storageBucket: "chat-app-e727d.appspot.com",
    messagingSenderId: "1074971203636",
    appId: "1:1074971203636:web:12afee09c6b5592ad61261",
    measurementId: "G-BREGH6Q3HM"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
    auth.useEmulator('http://localhost:9099');
    db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;