import firebase from 'firebase/app';
import firebaseConfig from '/conf/firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';

// firebase.apps.length 정체가 궁금하다.

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
if (process.env.NODE_ENV === 'development') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    const config = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
      appId: process.env,
    };

    firebase.initializeApp(config);
  }
}

export const app = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
