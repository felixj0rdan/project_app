import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCSxC7t-ipidb2q3Wc45HoEZcvW78bmro4",
    authDomain: "projectapp-c621a.firebaseapp.com",
    projectId: "projectapp-c621a",
    storageBucket: "projectapp-c621a.appspot.com",
    messagingSenderId: "245848941079",
    appId: "1:245848941079:web:d0d6c5ef1e996ad296f252",
    measurementId: "G-1MQG7V84J1"
  };

  
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const auth = app.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};