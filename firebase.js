import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAHHncGmhrx47GRt8N7i79bka2s4UKHVWE",
  authDomain: "travel-app-aaf84.firebaseapp.com",
  projectId: "travel-app-aaf84",
  storageBucket: "travel-app-aaf84.appspot.com",
  messagingSenderId: "283969216709",
  appId: "1:283969216709:web:eaba3ac32cd31bfff010ac",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
