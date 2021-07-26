import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACMYHVxOO9FSRuoPeaDSsaRUQp1n_gkyg",
  authDomain: "viajando-app.firebaseapp.com",
  databaseURL: "https://viajando-app-default-rtdb.firebaseio.com",
  projectId: "viajando-app",
  storageBucket: "viajando-app.appspot.com",
  messagingSenderId: "613283890601",
  appId: "1:613283890601:web:997d173ea44c38b769b0b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

export { projectFirestore, projectStorage };