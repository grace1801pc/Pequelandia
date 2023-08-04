
import { initializeApp } from "firebase/app";
//import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAXVl60yN0Vgza2ll-kv8Yq1b22nmny5Eg",
  authDomain: "pequelandia-cd601.firebaseapp.com",
  projectId: "pequelandia-cd601",
  storageBucket: "pequelandia-cd601.appspot.com",
  messagingSenderId: "436496947566",
  appId: "1:436496947566:web:9cceefad52d43173a3097f"
};
//initializeApp(firebaseConfig)
//export const auth=getAuth();
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const app=initializeApp(firebaseConfig)
const appFirebase=initializeApp(firebaseConfig);
export default appFirebase

