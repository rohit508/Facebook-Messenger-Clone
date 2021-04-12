import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0F0fMyCEzAYew9kxKOUOhIqpMP98JrVE",
    authDomain: "facebook-messenger-clone-bac0e.firebaseapp.com",
    projectId: "facebook-messenger-clone-bac0e",
    storageBucket: "facebook-messenger-clone-bac0e.appspot.com",
    messagingSenderId: "364781399122",
    appId: "1:364781399122:web:accaf9b8b55ce0983e438b"

});
const db = firebaseApp.firestore();


export { db };