const firebaseConfig = {
    apiKey: "AIzaSyBLuuZwpXwcW5NYZMuk-4NWh0FDHyRedYA",
    authDomain: "clone-b8079.firebaseapp.com",
    projectId: "clone-b8079",
    storageBucket: "clone-b8079.appspot.com",
    messagingSenderId: "615572763850",
    appId: "1:615572763850:web:ae8e8df713897e034ef033",
    measurementId: "G-9PZC5CWY09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();