import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAJOR3iuAgIpRqES4dSSYyVEbhuuJFR0qk",
    authDomain: "alma-librerias.firebaseapp.com",
    projectId: "alma-librerias",
    storageBucket: "alma-librerias.appspot.com",
    messagingSenderId: "124388168631",
    appId: "1:124388168631:web:72e0dbbe02ce12db8e0e32"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

//Seleccionar la base de datos de firestore
export const DB = getFirestore(app);