// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWUMLM8qv35jmWe5X3krW5-KI2MfSD81Y",
  authDomain: "daysofcode-logger.firebaseapp.com",
  projectId: "daysofcode-logger",
  storageBucket: "daysofcode-logger.appspot.com",
  messagingSenderId: "658775697607",
  appId: "1:658775697607:web:1bd4ed5773b636c8f936e2",
  measurementId: "G-XK70E3F7NT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "Commits");

// adding event
const addEvent = (event) => {
  addDoc(colRef, {
    createdOn: event.createdOn,
    eventCommits: event.eventCommits,
  }).then(() => {
    console.log(event);
  });
};

module.exports = {
  addEvent,
};
