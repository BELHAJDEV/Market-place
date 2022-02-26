import firebase from 'firebase/compat'

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyATRZErjmbF_eiBwJxcmhymh3D5om0HkFI",
  authDomain: "marketplace-app-f540b.firebaseapp.com",
  projectId: "marketplace-app-f540b",
  storageBucket: "marketplace-app-f540b.appspot.com",
  messagingSenderId: "43470782515",
  appId: "1:43470782515:web:6047e92625a07f573b2346",
  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const storageRef = storage.ref();
const storageRefImgs = storageRef.child('images');

export {db , auth , storage,storageRef,storageRefImgs};