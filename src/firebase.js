import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIjA_69CvGFGoZYu52LOqo5GjW7-Njk1Y",
    authDomain: "fir-auth-sample-a069e.firebaseapp.com",
    projectId: "fir-auth-sample-a069e",
    storageBucket: "fir-auth-sample-a069e.appspot.com",
    messagingSenderId: "96835070523",
    appId: "1:96835070523:web:b37aede9635c347f478a1e",
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();