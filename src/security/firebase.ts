import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTKY-j20_JLjvgDvrr7GwhZGps7r5sR6I",
  authDomain: "e-bazary.firebaseapp.com",
  projectId: "e-bazary",
  storageBucket: "e-bazary.appspot.com",
  messagingSenderId: "715560306040",
  appId: "1:715560306040:web:a495097fd10254a376748d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseApp = app;
