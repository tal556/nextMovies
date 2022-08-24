
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGATOLv79na7DWC-Ke_JB8d6ByQDiiCX4",
    authDomain: "nextmovies-35708.firebaseapp.com",
    projectId: "nextmovies-35708",
    storageBucket: "nextmovies-35708.appspot.com",
    messagingSenderId: "257615209798",
    appId: "1:257615209798:web:45c4f0ee92232f7ecff147",
    measurementId: "G-NE7GGPBQ8B"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }