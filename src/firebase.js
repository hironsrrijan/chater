import firebase from 'firebase';
 
var firebaseConfig = {
    apiKey: "AIzaSyBZ9CN8oIgffWD1OQ-rlFcUCnSfyEEDGi0",
    authDomain: "chatapp-28291.firebaseapp.com",
    databaseURL: "https://chatapp-28291.firebaseio.com",
    projectId: "chatapp-28291",
    storageBucket: "chatapp-28291.appspot.com",
    messagingSenderId: "688889504861",
    appId: "1:688889504861:web:b73c3ca81a50ea9caa59b4",
    measurementId: "G-5XJ25Y9W93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;