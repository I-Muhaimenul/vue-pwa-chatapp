//firebase folder is created manually after installing --firebase

import firebase from 'firebase'

// Initialize Firebase
export const config = {
    apiKey: "AIzaSyCU33CFKO836sQpQJ1L8pJ_qyC1jMTUfvM",
    authDomain: "vue-basic-db.firebaseapp.com",
    databaseURL: "https://vue-basic-db.firebaseio.com",
    projectId: "vue-basic-db",
    storageBucket: "vue-basic-db.appspot.com",
    messagingSenderId: "1022181926052"
}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')