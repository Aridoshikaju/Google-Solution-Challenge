import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { getAnalytics } from "firebase/analytics"

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAFkLjvwV7CupoK8Wqzpxrhxy5NIequPQ8",
        authDomain: "solution-22-8e8c0.firebaseapp.com",
        projectId: "solution-22-8e8c0",
        storageBucket: "solution-22-8e8c0.appspot.com",
        messagingSenderId: "764340595875",
        appId: "1:764340595875:web:4602d38900ec636f53a316",
        measurementId: "G-HK1FHTCBPP"
      
});

const db = firebaseApp.firestore();
export default db;