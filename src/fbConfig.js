import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
var config = {
    apiKey: "AIzaSyAC35ubCOotpc9tA0vRshxfTEqMisjONHA",
    authDomain: "test2-511fa.firebaseapp.com",
    databaseURL: "https://test2-511fa.firebaseio.com",
    projectId: "test2-511fa",
    storageBucket: "test2-511fa.appspot.com",
    messagingSenderId: "731937336766",
    appId: "1:731937336766:web:8ef6034f39c316d85cddef"
  };
firebase.initializeApp(config);
var db = firebase.database();
const hashesCollection = db.ref("hashes");

export { db, hashesCollection }