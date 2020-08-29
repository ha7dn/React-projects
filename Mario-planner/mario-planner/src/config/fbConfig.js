import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCg3XaEQOXiskB3vr4f8NgrT6o715IZGgQ",
    authDomain: "marioplanner-files.firebaseapp.com",
    databaseURL: "https://marioplanner-files.firebaseio.com",
    projectId: "marioplanner-files",
    storageBucket: "marioplanner-files.appspot.com",
    messagingSenderId: "905647471994",
    appId: "1:905647471994:web:a59103a787d0067512eac3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
