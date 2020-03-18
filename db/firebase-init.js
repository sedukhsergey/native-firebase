import firebase from 'firebase'
import 'firebase/auth'
import '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyADpLukRQVMdrNvdTuNPzD_k5Bfx70Vr5s",
  authDomain: "native-firebase-bd948.firebaseapp.com",
  databaseURL: "https://native-firebase-bd948.firebaseio.com",
  projectId: "native-firebase-bd948",
  storageBucket: "native-firebase-bd948.appspot.com",
  messagingSenderId: "951905000252",
  appId: "1:951905000252:web:157088cf66a615e2dedc39",
  measurementId: "G-H4TQRE8JHL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const authenticate = firebase.auth();
const database = firebase.firestore();
const usersDb = database.collection('users');
const citiesDb = database.collection('cities');

export { usersDb, citiesDb, database, authenticate }
