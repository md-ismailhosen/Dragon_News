// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_projectId,
    authDomain:import.meta.env.VITE_apiKey,
    projectId:import.meta.env.VITE_storageBucket,
    storageBucket:import.meta.env.VITE_messagingSenderId,
    messagingSenderId:import.meta.env.VITE_authDomain,
    appId:import.meta.env.VITE_appId,
    
};



/* // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIzXLU3sW5n5tZwtm5xPEKapctQ5rT2T8",
    authDomain: "dragon-news-breaking-92b03.firebaseapp.com",
    projectId: "dragon-news-breaking-92b03",
    storageBucket: "dragon-news-breaking-92b03.firebasestorage.app",
    messagingSenderId: "146302287712",
    appId: "1:146302287712:web:38644f872bedb110f82805"
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
