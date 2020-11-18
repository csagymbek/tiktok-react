import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbZOq7ZoETpQCd4dHfeAYIQ9Dd1c71geA",
  authDomain: "tiktok-react-eba24.firebaseapp.com",
  databaseURL: "https://tiktok-react-eba24.firebaseio.com",
  projectId: "tiktok-react-eba24",
  storageBucket: "tiktok-react-eba24.appspot.com",
  messagingSenderId: "650184196875",
  appId: "1:650184196875:web:e0e01dbcf0d0846186580e",
  measurementId: "G-S0ZT7V2SRD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
