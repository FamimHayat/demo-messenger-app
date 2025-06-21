import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDqELoSAx_atoxys6m9m4cgC-omAmCoF54",
  authDomain: "text-chatapp.firebaseapp.com",
  projectId: "text-chatapp",
  storageBucket: "text-chatapp.firebasestorage.app",
  messagingSenderId: "101903822371",
  appId: "1:101903822371:web:d7f8c04878d83f84794b96",
  measurementId: "G-CSMDD8LYEX",
};

export const dbConfig = initializeApp(firebaseConfig);

