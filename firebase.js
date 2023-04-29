// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyz5lWHWsN0r8p2wq0frG1ejqES1c2vbc",
  authDomain: "login-ae507.firebaseapp.com",
  projectId: "login-ae507",
  storageBucket: "login-ae507.appspot.com",
  messagingSenderId: "932858914117",
  appId: "1:932858914117:web:4340f9524e65d2438d0a2c"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
