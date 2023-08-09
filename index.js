// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import {getDatabase, ref,set} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6HoO3Xyb4fmisUhLK09AwGbVl35HP4Jo",
  authDomain: "count-7bc1b.firebaseapp.com",
  databaseURL: "https://count-7bc1b-default-rtdb.firebaseio.com",
  projectId: "count-7bc1b",
  storageBucket: "count-7bc1b.appspot.com",
  messagingSenderId: "237721495030",
  appId: "1:237721495030:web:9191dc46108bda010cd3d7",
  measurementId: "G-HEJGWV3FSN"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function increment(){
    var countValue;
    database.ref('count').once('value').then(function(snapshot) {
        database.ref('count').set(snapshot.val()+1, function(error) {
            if (error) {
              console.error("Error updating count:", error);
            } else {
              console.log("Count updated successfully!");
            }
          });
      }).catch(function(error) {
        console.error("Error reading count:", error);
      });

     setTimeout(function() {
        database.ref('count').once('value').then(function(snapshot) {
            document.getElementById('count').innerHTML = snapshot.val();
         }).catch(function(error) {
           console.error("Error reading count:", error);
         });
      }, 100);
}

