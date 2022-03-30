import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getStorage } from 'firebase/storage';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDw-QrkXF-lsd_hcmiP2E9dJjA6c6p_1Hs",
    authDomain: "terrathon-709b5.firebaseapp.com",
    databaseURL: "https://terrathon-709b5-default-rtdb.firebaseio.com",
    projectId: "terrathon-709b5",
    storageBucket: "terrathon-709b5.appspot.com",
    messagingSenderId: "48951848500",
    appId: "1:48951848500:web:b27729d6ab3e7e19ab6461",
    measurementId: "G-5M59RX41KX"
});

const db = firebaseApp.firestore();
export const storage = getStorage(firebaseApp)

export default db;