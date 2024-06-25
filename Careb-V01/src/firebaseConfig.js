// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn8IY4gyvzR5XCzhAxhcnH4uvmeq_HBx0",
    authDomain: "caribbeaneaze.firebaseapp.com",
    projectId: "caribbeaneaze",
    storageBucket: "caribbeaneaze.appspot.com",
    messagingSenderId: "212268879570",
    appId: "1:212268879570:web:14aba5b81cded3c979e70b",
    measurementId: "G-TNKG8FZ9HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
