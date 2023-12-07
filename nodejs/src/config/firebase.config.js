// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {getStorage} = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyCWmVCxG6BD4viUlMbn4cP1K6d5TIdwSzs",
  authDomain: "ra-react-fb.firebaseapp.com",
  projectId: "ra-react-fb",
  storageBucket: "ra-react-fb.appspot.com",
  messagingSenderId: "2709101792",
  appId: "1:2709101792:web:eea08ae1901903584d0485",
  measurementId: "G-JJ0J977923",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
exports.storageFirebase = getStorage(appFirebase);