import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

//firebase config
var firebaseConfig = {
    apiKey: "AIzaSyAN7dAq-DCc_9ac6oQJmF8Jfx3couphkzU",
    authDomain: "proj3-993d9.firebaseapp.com",
    databaseURL: "https://proj3-993d9.firebaseio.com",
    projectId: "proj3-993d9",
    storageBucket: "proj3-993d9.appspot.com",
    messagingSenderId: "204103118226",
    appId: "1:204103118226:web:9b713ec8aa37ad3deb254b",
    measurementId: "G-N8MW45J56F"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const baseDB = firebaseApp.firestore();
export const db = baseDB;