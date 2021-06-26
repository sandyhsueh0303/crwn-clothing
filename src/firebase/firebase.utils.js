import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1kI6MfK_IwmdfIN2xjHu_qzyse5WXdDA",
    authDomain: "crown-db-5adb4.firebaseapp.com",
    projectId: "crown-db-5adb4",
    storageBucket: "crown-db-5adb4.appspot.com",
    messagingSenderId: "32884761907",
    appId: "1:32884761907:web:cd633fe046a3fa7e040a46",
    measurementId: "G-69KDWZ0M82"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;