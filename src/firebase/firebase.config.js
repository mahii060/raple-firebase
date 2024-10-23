// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXG_4R7Hu6f6rh4eqqNFXIbla4ujpIGZ0",
    authDomain: "raple-firebase.firebaseapp.com",
    projectId: "raple-firebase",
    storageBucket: "raple-firebase.appspot.com",
    messagingSenderId: "851077847692",
    appId: "1:851077847692:web:a52b5c9ca63da13c3939a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app