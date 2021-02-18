import firebase from 'firebase/app';
import config from '/conf/firebaseConfig';

require('firebase/firestore');
require('firebase/auth');

firebase.initializeApp(config);

export const app = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
