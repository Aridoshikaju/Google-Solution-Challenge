// 
import * as firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyAFkLjvwV7CupoK8Wqzpxrhxy5NIequPQ8",
    authDomain: "solution-22-8e8c0.firebaseapp.com",
    projectId: "solution-22-8e8c0",
    storageBucket: "solution-22-8e8c0.appspot.com",
    messagingSenderId: "764340595875",
    appId: "1:764340595875:web:4602d38900ec636f53a316",
    measurementId: "G-HK1FHTCBPP"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase;
  // const auth=firebase.auth()
  // const db=firebase.firestore()
  // const provider=new firebase.auth.GoogleAuthProvider();
  // const storage = firebase.storage();
  // export{auth,provider,storage};
  // export default db;