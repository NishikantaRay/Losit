import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBilLLJVk91jksJB8LGSDyuyDdg_ADQqxk",
    authDomain: "login-511d6.firebaseapp.com",
    projectId: "login-511d6",
    storageBucket: "login-511d6.appspot.com",
    messagingSenderId: "359575864809",
    appId: "1:359575864809:web:ec1a53bccce72eb78db778"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;