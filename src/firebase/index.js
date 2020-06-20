import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage'

Vue.use(firestorePlugin);

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8PDnFaY6SA_Yg7926JjL9OZqKqoz1u0g",
    authDomain: "myportfolio-f8227.firebaseapp.com",
    databaseURL: "https://myportfolio-f8227.firebaseio.com",
    projectId: "myportfolio-f8227",
    storageBucket: "myportfolio-f8227.appspot.com",
    messagingSenderId: "777717311069",
    appId: "1:777717311069:web:dfcd7273bc7895a790cfb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
