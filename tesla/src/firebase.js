import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZVYkDh38fg8JbSyE4b4oWq8oXjhVRITA",
    authDomain: "tesla-clone-reactjs-c487c.firebaseapp.com",
    projectId: "tesla-clone-reactjs-c487c",
    storageBucket: "tesla-clone-reactjs-c487c.appspot.com",
    messagingSenderId: "433899637898",
    appId: "1:433899637898:web:44e436bf79ff4f271fb173"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export  {auth}