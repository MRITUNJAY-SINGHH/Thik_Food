import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const env = import.meta.env;

const firebaseConfig = {
   apiKey: env.VITE_FIREBASE_API_KEY || env.VITE_APP_API_KEY,
   authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || env.VITE_APP_AUTH_DOMAIN,
   projectId: env.VITE_FIREBASE_PROJECT_ID || env.VITE_APP_PROJECT_ID,
   storageBucket:
      env.VITE_FIREBASE_STORAGE_BUCKET || env.VITE_APP_STORAGE_BUCKET,
   messagingSenderId:
      env.VITE_FIREBASE_MESSAGING_SENDER_ID || env.VITE_APP_MESSAGING_SENDER_ID,
   appId: env.VITE_FIREBASE_APP_ID || env.VITE_APP_APP_ID,
   measurementId:
      env.VITE_FIREBASE_MEASUREMENT_ID || env.VITE_APP_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey) {
   throw new Error(
      'Missing Firebase API key. Set VITE_FIREBASE_API_KEY in .env and restart the dev server.',
   );
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
