import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// should be in an environment variable if deployed to production
const firebaseConfig = {
    apiKey: "AIzaSyB_8x8qYLlOFtLstI2NNe01TH0hGlvygXY",
    authDomain: "instagram-clone-aa4a6.firebaseapp.com",
    projectId: "instagram-clone-aa4a6",
    storageBucket: "instagram-clone-aa4a6.appspot.com",
    messagingSenderId: "602531184701",
    appId: "1:602531184701:web:6e087ab509128671b5ea54",
    measurementId: "G-EB1MCS0GLT"
  };

// firebase.initializeApp(firebaseConfig);

// export const firebaseAuth = firebase.auth();

// export const firestore = firebase.firestore();

// export const realtime = firebase.database();

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)





// export default firebase;