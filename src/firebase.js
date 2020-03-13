import { initializeApp } from 'firebase';

const firebase = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "new-world-2b3fc.firebaseapp.com",
    databaseURL: "https://new-world-2b3fc.firebaseio.com",
    projectId: "new-world-2b3fc",
    storageBucket: "new-world-2b3fc.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});

export const firestore = firebase.firestore();
export const fireStorage = firebase.storage();

// firebaseのデータGET
export async function getFirebaseData(collection, document){
    const docRef = firestore.collection(collection).doc(document);
    const doc = await docRef.get();
    const data = doc.data();
    return data;
}

// ログイン情報GET
export async function getFirebaseAuth(callback){
     await firebase.auth().onAuthStateChanged(userData => {
        callback(userData);
        return userData;
    });
}

export default firebase