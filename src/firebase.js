// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDl-DE7BAsDqYsa3pdwNhUW-shXhfUY5vs',
  authDomain: 'esmat--clone.firebaseapp.com',
  projectId: 'esmat--clone',
  storageBucket: 'esmat--clone.appspot.com',
  messagingSenderId: '1048757406447',
  appId: '1:1048757406447:web:25e536049418767a1a691a',
  measurementId: 'G-QR117GBRZE',
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //real time db in firebase
const auth = firebase.auth();

export { db , auth};