import  firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTx1DoJYR-OXflNb_qwTS3UM6q_vkiQCs",
  authDomain: "streetbballgre.firebaseapp.com",
  projectId: "streetbballgre",
  storageBucket: "streetbballgre.appspot.com",
  messagingSenderId: "339325470548",
  appId: "1:339325470548:web:c465a2c81da026d2f52ac1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();