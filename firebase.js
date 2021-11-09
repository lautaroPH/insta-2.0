import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBJw-2VYSeF9tmAuqiL210uxQGkINa1Gw8',
  authDomain: 'insta-2-f44eb.firebaseapp.com',
  projectId: 'insta-2-f44eb',
  storageBucket: 'insta-2-f44eb.appspot.com',
  messagingSenderId: '895060163253',
  appId: '1:895060163253:web:bf7c12fa670abb8d8b9cfc',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
