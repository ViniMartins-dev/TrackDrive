// Firebase App (modular)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// ⚠️ NÃO usar getAnalytics com Expo (não compatível fora do navegador)
const firebaseConfig = {
  apiKey: "AIzaSyBtC8bUhUw-xnxgKx86RXR3RSFZ3qPDE1g",
  authDomain: "trackdrive-378c5.firebaseapp.com",
  projectId: "trackdrive-378c5",
  storageBucket: "trackdrive-378c5.appspot.com", // Corrigido
  messagingSenderId: "705635889312",
  appId: "1:705635889312:web:932a7e86b43207079fd9c5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


