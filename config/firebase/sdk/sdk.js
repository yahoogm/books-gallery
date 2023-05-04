import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSAX-msAaEmoJYIae3XsXuOx2oVr7Ta-I',
  authDomain: 'booksgallery.firebaseapp.com',
  projectId: 'booksgallery',
  storageBucket: 'booksgallery.appspot.com',
  messagingSenderId: '185717950311',
  appId: '1:185717950311:web:b6f3f10c5de77fcf9951c2',
  measurementId: 'G-7P6B7VZSV9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
