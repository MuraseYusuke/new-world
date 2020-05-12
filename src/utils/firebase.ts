import * as React from 'react';
import firebase from './../firebase';

export function getAuth(callback: (userData: any) => void) {
    firebase.auth().onAuthStateChanged(userData => {
        callback(userData);
    })
}

export async function getData(col: string, doc: string, subcol?: string, subdoc?: string){
    const db = firebase.firestore();
    if(!!subcol && !!subdoc){
        let docRef = accessFirebase(col, doc, subcol, subdoc);
        const docData = await docRef.get();
        return docData.data();
    }else{
        let docRef = accessFirebase(col, doc);
        const docData = await docRef.get();
        return docData.data();
    }
}

export function accessFirebase (col: string, doc: string, subcol?: string, subdoc?: string){
    const db = firebase.firestore();
    if(!!subcol && !!subdoc){
        return db.collection(col).doc(doc).collection(subcol).doc();
    }else{
        return db.collection(col).doc(doc);
    }
}
