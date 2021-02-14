import firebase from 'firebase/app';
import firebaseConfig from '/conf/firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';

// firebase.apps.length 정체가 궁금하다.

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const app = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
