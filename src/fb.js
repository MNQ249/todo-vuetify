
import firebase from 'firebase/app'
import 'firebase/firestore'




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBx4uEUZzkLnTY7zjQX-OCnwhBmXzNR_A", //api key is used to identify our application in front end to firebase on back end 
    authDomain: "todo-mesfer.firebaseapp.com",
    projectId: "todo-mesfer",
    storageBucket: "todo-mesfer.appspot.com",
    messagingSenderId: "72828254998",
    appId: "1:72828254998:web:6d95934544e0f65c332e37"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); // initalize constant that fire store and set up refernce point so we can start interacting with database 

  db.settings({ timestampsInSnapshots: true }); // because recent update from google firebase when it comes to working with timestamp if we don't do this then we're going to get a warning message in the console

  export default db;