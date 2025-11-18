import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Em um projeto real colocaria as variáveis no .env, mas para facilitar para o avaliador testar o app, deixarei elas expostas diretamente no arquivo de configuração do Firebase.

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
