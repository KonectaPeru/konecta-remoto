// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAiM-5lnPLYeIP-RS7jN934U283nctkhDE",
  authDomain: "agente-remoto.firebaseapp.com",
  databaseURL: "https://agente-remoto.firebaseio.com",
  projectId: "agente-remoto",
  storageBucket: "agente-remoto.appspot.com",
  messagingSenderId: "756747822527",
  appId: "1:756747822527:web:4ae2f51e04100f57a6ad0a",
  measurementId: "G-3PE55SDZQD"
};


export const db = firebase.initializeApp(firebaseConfig)
  .database()

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};


export const users = db.ref('users');
export const areas = db.ref('areas');
export const cuentas = db.ref('cuentas');
export const campanias = db.ref('campanias');
export const cargos = db.ref('cargos');
export const news = db.ref('noticias');