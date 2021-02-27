import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBzeQdtIJiEu-eQa8HJ0kzy5yUZLgu3jSY",
    authDomain: "onev1-e7a57.firebaseapp.com",
    projectId: "onev1-e7a57",
    storageBucket: "onev1-e7a57.appspot.com",
    messagingSenderId: "1053903844185",
    appId: "1:1053903844185:web:70de13ee19f1f6b09a9248"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  