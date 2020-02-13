import { initializeApp } from 'firebase';

export default initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "new-world-2b3fc.firebaseapp.com",
    databaseURL: "https://new-world-2b3fc.firebaseio.com",
    projectId: "new-world-2b3fc",
    storageBucket: "new-world-2b3fc.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});