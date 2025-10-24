import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Em um projeto real colocaria as variáveis no .env, mas para facilitar para o avaliador testar o app, deixarei elas expostas diretamente no arquivo de configuração do Firebase.

const firebaseConfig = {
  apiKey: "AIzaSyAqKdzZunDS6uKIUI2kbbTD3i8YVhz07lM",
  authDomain: "finance-dashboard-e1d03.firebaseapp.com",
  projectId: "finance-dashboard-e1d03",
  storageBucket: "finance-dashboard-e1d03.firebasestorage.app",
  messagingSenderId: "255534819027",
  appId: "1:255534819027:web:33a9a5684d5507efb85626",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
