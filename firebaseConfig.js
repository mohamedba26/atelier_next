// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyA5tFdrLsTnR9ceaVqFXQuRpzU64gKdoEA",
    authDomain: "nextproject-815e8.firebaseapp.com",
    projectId: "nextproject-815e8",
    storageBucket: "nextproject-815e8.appspot.com",
    messagingSenderId: "513905979092",
    appId: "1:513905979092:web:61b99760b45878c192d541"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage; 