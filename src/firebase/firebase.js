// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXavNoy9AqVSVUa34YjbzCLf76VOU7T2Q",
    authDomain: "trendora-bd12c.firebaseapp.com",
    projectId: "trendora-bd12c",
    storageBucket: "trendora-bd12c.appspot.com",
    messagingSenderId: "25749775534",
    appId: "1:25749775534:web:787dc6569260ec921d793f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};