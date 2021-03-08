import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyASjgxJ43ZTcktbyTeAlC2jH8YeLZdzyvY",
  authDomain: "pip-pipo-project.firebaseapp.com",
  projectId: "pip-pipo-project",
  storageBucket: "pip-pipo-project.appspot.com",
  messagingSenderId: "144975521700",
  appId: "1:144975521700:web:759bda51f4773a5f79c331"
};


const Firebase = firebase.initializeApp(firebaseConfig)



export default Firebase