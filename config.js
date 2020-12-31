import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD2ubtmFOUZb77oZL5b7OBqsN0hkJs95sQ",
    authDomain: "car-racing-e10a9.firebaseapp.com",
    databaseURL: "https://car-racing-e10a9.firebaseio.com",
    projectId: "car-racing-e10a9",
    storageBucket: "car-racing-e10a9.appspot.com",
    messagingSenderId: "1041751433389",
    appId: "1:1041751433389:web:125f94e15393ed43ed6624",
    measurementId: "G-JPZE4HMBGH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase.firestore();