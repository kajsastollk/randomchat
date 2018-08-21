import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDAvaaBpc6rOo26EZg-tN-Xj8RGAN-rULg",
  authDomain: "platsbanken-v9.firebaseapp.com",
  databaseURL: "https://platsbanken-v9.firebaseio.com",
  projectId: "platsbanken-v9",
  storageBucket: "platsbanken-v9.appspot.com",
  messagingSenderId: "432187485893"
};
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;